import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient/ingredient.model';
import { CartService } from '../shared/cart.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  listOfIngredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private cartService: CartService, private loggingService: LoggingService) { }

  ngOnInit() {
    this.listOfIngredients = this.cartService.getIngredients();
    this.ingredientsSubscription = this.cartService.ingredientsChanged.subscribe({
      next: (ingredients: Ingredient[]) => {
        this.listOfIngredients = ingredients;
      }
    });
    this.loggingService.printLog('Hello from ShoppingCartComponent NgOnInit()!');
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    console.log('Selected item ' + +index);
    this.cartService.startedEditing.next(index);
  }



}
