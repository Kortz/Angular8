import { Component, OnInit } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  details: RecipeDetailComponent = null;
  ingredients: IngredientListComponent = null;

  constructor() { }

}
