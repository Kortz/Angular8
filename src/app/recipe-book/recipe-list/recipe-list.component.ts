import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { RecipesService } from '../../shared/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  listOfAllRecipes: Recipe[];

  recipeSubscription: Subscription;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.listOfAllRecipes = this.recipesService.getRecipes();

    this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.listOfAllRecipes = recipes;
        console.log('Recipes changed!');
    });
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }

}
