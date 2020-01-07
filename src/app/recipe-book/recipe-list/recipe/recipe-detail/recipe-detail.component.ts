import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CartService } from 'src/app/shared/cart.service';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public selectedRecipe: Recipe;

  constructor(private cartService: CartService, private recipeService: RecipesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(params.id);
      }
    );
  }

  addRecipeToShoppingList() {
    for (const recipe of this.selectedRecipe.ingredients) {
      this.cartService.addIngredient(recipe);
    }
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.selectedRecipe = null;
  }
}
