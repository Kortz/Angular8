import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  private editMode: boolean = false;
  recipe: Recipe;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    const titleControl = new FormControl(null, Validators.required);
    const descriptionControl = new FormControl(null, Validators.required);
    const imagePathControl = new FormControl(null, Validators.required);
    const ingredientArray = new FormArray([]);

    this.form = new FormGroup({
      title: titleControl,
      description: descriptionControl,
      imagePath: imagePathControl,
      ingredients: ingredientArray
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params.id != null;
        if (this.editMode) {
          this.recipe = this.recipesService.getRecipe(params.id);
        } else {
          this.recipe = new Recipe(this.recipesService.getRecipes().length + 1, '', '', '', []);
        }

        titleControl.setValue(this.recipe.title);
        descriptionControl.setValue(this.recipe.description);
        imagePathControl.setValue(this.recipe.imagePath);
        ingredientArray.clear();

        if (this.editMode) {
          for (const ingredient of this.recipe.ingredients) {
            ingredientArray.push(
              new FormGroup({
                name: new FormControl(ingredient.name, Validators.required),
                amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
              })
            );
          }
        }
      }
    );
  }

  cancel() {
    const ingredientArr = new FormArray([]);
    for (const ingredient of this.recipe.ingredients) {
      ingredientArr.push(new FormGroup({
        name: new FormControl(ingredient.name, Validators.required),
        amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
      }));
    }

    this.form.setValue({
      title: this.recipe.title,
      description: this.recipe.description,
      imagePath: this.recipe.imagePath,
      ingredients: ingredientArr
    });
  }

  deleteIngredient(index: number) {
    (this.form.get('ingredients') as FormArray).removeAt(index);
  }

  addIngredient() {
    const group = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.min(1)])
    });

    (this.form.get('ingredients') as FormArray).push(group);
  }

  isFormValid() {
    return this.form.valid;
  }

  getControls() {
    return (this.form.get('ingredients') as FormArray).controls;
  }

  submit() {
    this.recipe.title = this.form.value.title;
    this.recipe.description = this.form.value.description;
    this.recipe.ingredients.length = 0;
    for (const ingredientControl of this.getControls()) {
      const ingredient = new Ingredient(ingredientControl.get('name').value, ingredientControl.get('amount').value);
      this.recipe.ingredients.push(ingredient);
    }
    this.recipesService.updateRecipe(this.recipe);
  }

}
