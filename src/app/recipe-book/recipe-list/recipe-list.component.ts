import { Component, OnInit } from '@angular/core';
import { RecipeComponent } from './recipe/recipe.component.ts';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  listOfAllRecipes: RecipeComponent = [];

  constructor() { 
    this.listOfAllRecipes.push(new RecipeComponent());
    this.listOfAllRecipes.push(new RecipeComponent());
  }

  ngOnInit() {
  }

}