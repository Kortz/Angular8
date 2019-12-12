import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe/recipe.model';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'], 
  providers: [RecipesService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }


  recipeSelected(recipeData: {recipe: Recipe}) {
    this.selectedRecipe = recipeData.recipe;
  }

}
