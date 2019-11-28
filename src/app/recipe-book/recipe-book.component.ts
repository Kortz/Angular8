import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component.ts';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  listOfAllRecipes: RecipeListComponent = new RecipeListComponent();

  constructor() { }

  ngOnInit() {
  }

}