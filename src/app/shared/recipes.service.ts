import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { Ingredient } from './ingredient/ingredient.model';

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private listOfAllRecipes: Recipe[] = [
        new Recipe(
          'Breakfast Yoghurt',
          'Quick, delicious breakfast yoghurt',
          'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          [new Ingredient('Apple', 400)]),
        new Recipe(
          'Hot & Spicy Wings',
          'Sizzling Hot Chicken Wings',
          'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          [new Ingredient('Chicken Wings', 12), new Ingredient('Chilies', 1)]),
        new Recipe(
          'Fudge Cupcakes',
          'Easy dessert cupcakes',
          'https://images.pexels.com/photos/1775285/pexels-photo-1775285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          [new Ingredient('Apple', 400)])
      ];

    getRecipes() {
        return this.listOfAllRecipes.slice();
    }
}
