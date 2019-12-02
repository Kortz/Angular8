import { Component, OnInit } from '@angular/core';
import { IngredientComponent } from './ingredient/ingredient.component';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {

  public ingredientToQuantityMap = new Map();

  constructor() {
    this.ingredientToQuantityMap.set(new IngredientComponent(), 400);
    this.ingredientToQuantityMap.set(new IngredientComponent(), 200);
  }

}
