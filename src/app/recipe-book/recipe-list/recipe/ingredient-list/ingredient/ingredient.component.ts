import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  name = 'Test Ingredient';
  measurement = 'gram';

  constructor() { }

  ngOnInit() {
  }

}
