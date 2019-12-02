import { Component, OnInit } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {


  public details: RecipeDetailComponent = new RecipeDetailComponent();
    // ('Test Recipe', 'This is my test description',
    // 'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');


  public ingredients: IngredientListComponent = new IngredientListComponent();

  constructor() {
    this.details.title = 'Test Recipe';
    this.details.description = 'This is my test description'; 
    this.details.imagePath = 
      'https://images.pexels.com/photos/1646711/pexels-photo-1646711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  }
}
