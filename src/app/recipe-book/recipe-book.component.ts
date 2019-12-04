import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipe-list/recipe/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  listOfAllRecipes: RecipeListComponent = new RecipeListComponent();
  selectedRecipe: Recipe;

  constructor() { }

  recipeSelected(recipeData: {recipe: Recipe}) {
    this.selectedRecipe = recipeData.recipe;
  }

}
