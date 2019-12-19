import { EventEmitter } from '@angular/core';

import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { Ingredient } from './ingredient/ingredient.model';
import { Subject } from 'rxjs';

export class RecipesService {
    private listOfAllRecipes: Recipe[] = [
        new Recipe(1,
          'Breakfast Yoghurt',
          'Quick, delicious breakfast yoghurt',
          'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          [new Ingredient('Apple', 400)]),
        new Recipe(2,
          'Hot & Spicy Wings',
          'Sizzling Hot Chicken Wings',
          'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          [new Ingredient('Chicken Wings', 12), new Ingredient('Chilies', 1)]),
        new Recipe(3,
          'Fudge Cupcakes',
          'Easy dessert cupcakes',
          'https://images.pexels.com/photos/1775285/pexels-photo-1775285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          [new Ingredient('Apple', 400)])
      ];

  recipesChanged = new Subject<Recipe[]>();

  getRecipes() {
      return this.listOfAllRecipes.slice();
  }

  getRecipe(id: number) {
    let recipe = null;
    this.listOfAllRecipes.forEach(element => {
      if (+element.id === +id) {
        recipe = element;
        return recipe;
      }
    });
    return recipe;
  }

  updateRecipe(recipe: Recipe) {
    let foundRecipeIndex = null;
    console.log('Updating recipe!');
    for (let index = 0; index < this.listOfAllRecipes.length; index++) {
      const element = this.listOfAllRecipes[index];
      console.log(+element.id + ' === ' + +recipe.id);
      if (+element.id === +recipe.id) {
        foundRecipeIndex = index;
      }
    }
    if (foundRecipeIndex !== undefined) {
      console.log(this.listOfAllRecipes[foundRecipeIndex]);
      this.listOfAllRecipes[foundRecipeIndex] = recipe;
      console.log(this.listOfAllRecipes[foundRecipeIndex]);
      this.recipesChanged.next(this.listOfAllRecipes);
    }
  }
}
