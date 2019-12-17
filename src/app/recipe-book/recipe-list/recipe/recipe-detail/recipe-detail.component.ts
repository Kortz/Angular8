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
    // this.selectedRecipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
      }
    );
    // console.log(this.selectedRecipe);
  }

  addRecipeToShoppingList() {
    for (const recipe of this.selectedRecipe.ingredients) {
      this.cartService.addIngredient(recipe);
    }
  }
}
