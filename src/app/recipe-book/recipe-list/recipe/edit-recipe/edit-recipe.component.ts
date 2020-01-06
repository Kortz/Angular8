import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  private editMode: boolean = false;
  // selectedIngredient: number;
  recipe: Recipe;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    const titleControl = new FormControl(null);
    const descriptionControl = new FormControl(null);
    const imagePathControl = new FormControl(null);
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
                name: new FormControl(ingredient.name),
                amount: new FormControl(ingredient.amount)
              })
            );
          }
        }
      }
    );

  }

  // onEditItem(index: number) {
  //   this.selectedIngredient = index;
  // }

  // deleteIngredient() {
  //   this.recipe.ingredients.splice(this.selectedIngredient, 1);
  //   this.selectedIngredient = null;
  // }

  addIngredient() {
    // const newIngredient: Ingredient =
    //   new Ingredient(this.form.value.ingredientData.ingredientName, this.form.value.ingredientData.ingredientAmount);

    // const newIngredient: Ingredient = new Ingredient('', 0);
    // this.recipe.ingredients.push(newIngredient);

    // const group = new FormGroup({
    //   ingredientName: new FormControl(null),
    //   ingredientAmount: new FormControl(null)
    // });

    // (this.form.get('ingredientData') as FormArray).push(group);
  }

  // isNewIngredientValid() {
  //   const name = this.form.value.ingredientData.ingredientName;
  //   const amount = +this.form.value.ingredientData.ingredientAmount;

  //   return !(name !== undefined && name !== '' && amount !== undefined && amount > 0);
  // }

  getControls() {
    return (<FormArray> this.form.get('ingredients')).controls;
  }

  submit() {
    this.recipe.title = this.form.value.title;
    this.recipe.description = this.form.value.description;
    this.recipesService.updateRecipe(this.recipe);
  }

}
