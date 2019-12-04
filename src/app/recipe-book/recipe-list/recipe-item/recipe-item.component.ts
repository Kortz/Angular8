import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;

  @Output()
  recipeSelectionEmitter = new EventEmitter<{recipe: Recipe}>();

  constructor() { }

  ngOnInit() {
  }

  recipeSelected() {
    console.log(this.recipe);
    this.recipeSelectionEmitter.emit({recipe: this.recipe});
  }

}
