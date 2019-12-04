import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Ingredient } from '../../shared/ingredient/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  listOfAllRecipes: Recipe[] = [
    new Recipe(
      'Breakfast Yoghurt',
      'Quick, delicious breakfast yoghurt',
      'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [new Ingredient('Apple', 400)]),
    new Recipe(
      'Hot & Spicy Wings',
      'Sizzling Hot Chicken Wings',
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      [new Ingredient('Apple', 400)]),
    new Recipe(
      'Fudge Cupcakes',
      'Easy dessert cupcakes',
      'https://images.pexels.com/photos/1775285/pexels-photo-1775285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [new Ingredient('Apple', 400)])
  ];

  @Output()
  recipeSelectedEmitter = new EventEmitter<{recipe: Recipe}>();

  constructor() {
   }

  recipeSelected(recipeData: {recipe: Recipe}) {
    this.recipeSelectedEmitter.emit({recipe: recipeData.recipe});
  }

}
