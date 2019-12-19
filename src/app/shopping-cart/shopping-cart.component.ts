import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient/ingredient.model';
import { CartService } from '../shared/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  listOfIngredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.listOfIngredients = this.cartService.getIngredients();
    this.ingredientsSubscription = this.cartService.ingredientsChanged.subscribe({
      next: (ingredients: Ingredient[]) => {
        this.listOfIngredients = ingredients;
      }
    });
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    console.log('Selected item ' + +index);
    this.cartService.startedEditing.next(index);
  }



}
