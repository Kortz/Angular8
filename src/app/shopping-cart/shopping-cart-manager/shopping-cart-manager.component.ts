import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient.model';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-shopping-cart-manager',
  templateUrl: './shopping-cart-manager.component.html',
  styleUrls: ['./shopping-cart-manager.component.css']
})
export class ShoppingCartManagerComponent {

  @ViewChild('amountInput', {static: true})
  amountElement: ElementRef;

  constructor(private cartService: CartService) { }

  addItemToCart(nameInput: HTMLInputElement) {
    this.cartService.addIngredient(new Ingredient(nameInput.value, this.amountElement.nativeElement.value));
  }

}
