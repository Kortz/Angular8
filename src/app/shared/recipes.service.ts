import { Injectable } from '@angular/core';

import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { Ingredient } from './ingredient/ingredient.model';
import { Subject } from 'rxjs';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class RecipesService {

  constructor(private dataStorage: DataStorageService) {}

    private listOfAllRecipes: Recipe[] = [
        // new Recipe(null,
        //   'Breakfast Yoghurt',
        //   'Quick, delicious breakfast yoghurt',
        //   'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        //   [new Ingredient('Apple', 400)]),
        // new Recipe(null,
        //   'Hot & Spicy Wings',
        //   'Sizzling Hot Chicken Wings',
        //   'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        //   [new Ingredient('Chicken Wings', 12), new Ingredient('Chilies', 1)]),
        // new Recipe(null,
        //   'Fudge Cupcakes',
        //   'Easy dessert cupcakes',
        //   'https://images.pexels.com/photos/1775285/pexels-photo-1775285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        //   [new Ingredient('Apple', 400)])
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
      if (+element.id === +recipe.id) {
        foundRecipeIndex = index;
        break;
      }
    }
    if (foundRecipeIndex !== null) {
      this.listOfAllRecipes[foundRecipeIndex] = recipe;
      this.recipesChanged.next(this.getRecipes());
    } else {
      this.listOfAllRecipes.push(recipe);
      this.recipesChanged.next(this.getRecipes());
    }
    this.dataStorage.saveRecipe(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    for (let index = 0; index < this.listOfAllRecipes.length; index++) {
      const element = this.listOfAllRecipes[index];
      if (+element.id === +recipe.id) {
        this.listOfAllRecipes.splice(index, 1);
        this.recipesChanged.next(this.getRecipes());
        break;
      }
    }
  }
}
