import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../shared/recipes.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'], 
  providers: [RecipesService]
})
export class RecipeBookComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
