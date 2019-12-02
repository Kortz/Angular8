import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  public name = 'Test Ingredient';
  public measurement = 'gram';

  constructor() { }

  ngOnInit() {
  }

}
