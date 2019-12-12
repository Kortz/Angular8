import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { RecipesService } from '../../shared/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  listOfAllRecipes: Recipe[];

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.listOfAllRecipes = this.recipesService.getRecipes();
  }

}
