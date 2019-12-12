import { Component, Input, Optional } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input()
  public selectedRecipe: Recipe;

  constructor(private cartService: CartService) {
  }

  addRecipeToShoppingList() {
    for (const recipe of this.selectedRecipe.ingredients) {
      this.cartService.addIngredient(recipe);
    }
  }
}
