import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  private editMode = false;
  recipe: Recipe;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService, private router: Router) { }

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
          const UUID = '' + new Date().valueOf;
          this.recipe = new Recipe(UUID, '', '', '', []);
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
    this.router.navigate(['/recipes']);
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
    this.recipe.imagePath = this.form.value.imagePath;
    this.recipe.ingredients.length = 0;
    for (const ingredientControl of this.getControls()) {
      const ingredient = new Ingredient(ingredientControl.get('name').value, ingredientControl.get('amount').value);
      this.recipe.ingredients.push(ingredient);
    }

    if (!this.editMode) {
      this.recipesService.updateRecipe(this.recipe);
    } else {
      this.recipesService.saveNewRecipe(this.recipe);
    }
    this.router.navigate(['/recipes']);
  }

}
