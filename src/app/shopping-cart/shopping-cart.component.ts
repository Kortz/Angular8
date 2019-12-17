import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient/ingredient.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  listOfIngredients: Ingredient[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.listOfIngredients = this.cartService.getIngredients();
    this.cartService.ingredientsChanged.subscribe({
      next: (ingredients: Ingredient[]) => {
        this.listOfIngredients = ingredients;
      }
    });
  }

}
