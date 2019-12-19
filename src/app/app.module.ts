import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-list/recipe/recipe-detail/recipe-detail.component';
import { ShoppingCartManagerComponent } from './shopping-cart/shopping-cart-manager/shopping-cart-manager.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CartService } from './shared/cart.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe-book/recipe-list/recipe/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipe-book/recipe-list/recipe/edit-recipe/edit-recipe.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HeaderComponent, RecipeBookComponent, DropdownDirective,
    RecipeListComponent, RecipeDetailComponent, ShoppingCartManagerComponent,
    ShoppingCartComponent, RecipeItemComponent, RecipeStartComponent, EditRecipeComponent],
  bootstrap:    [ AppComponent ],
  providers: [ CartService ]
})
export class AppModule { }
