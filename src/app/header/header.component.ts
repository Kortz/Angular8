import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  navigationEmitter = new EventEmitter<{recipes: boolean, shopping: boolean}>();

  showRecipes: boolean;
  showShopping: boolean;
  collapsed = true;

  constructor() {
  }

  recipesSelected() {
    this.showRecipes = true;
    this.showShopping = false;
    this.navigationEmitter.emit({recipes: this.showRecipes, shopping: this.showShopping});
  }

  shoppingListSelected() {
    this.showRecipes = false;
    this.showShopping = true;
    this.navigationEmitter.emit({recipes: this.showRecipes, shopping: this.showShopping});
  }
}
