import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe-book/recipe-list/recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-book/recipe-list/recipe/recipe-detail/recipe-detail.component';
import { IngredientListComponent } from './recipe-book/recipe-list/recipe/ingredient-list/ingredient-list.component';
import { IngredientComponent } from './recipe-book/recipe-list/recipe/ingredient-list/ingredient/ingredient.component';
import { ShoppingCartManagerComponent } from './shopping-cart/shopping-cart-manager/shopping-cart-manager.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, RecipeBookComponent, RecipeListComponent, RecipeComponent, RecipeDetailComponent, IngredientListComponent, IngredientComponent, ShoppingCartManagerComponent, ShoppingCartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
