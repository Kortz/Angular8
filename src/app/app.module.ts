import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, RecipeBookComponent, DropdownDirective,
    RecipeListComponent, RecipeDetailComponent, ShoppingCartManagerComponent, ShoppingCartComponent, RecipeItemComponent],
  bootstrap:    [ AppComponent ],
  providers: [ CartService ]
})
export class AppModule { }
