import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  showRecipes: boolean;
  showShopping: boolean;

  constructor() {
    this.showRecipes = true;
  }

  processNavigation(serverData: {recipes: boolean, shopping: boolean}) {
    this.showRecipes = serverData.recipes;
    this.showShopping = serverData.shopping;
  }

}
