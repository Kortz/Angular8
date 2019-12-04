import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-cart-manager',
  templateUrl: './shopping-cart-manager.component.html',
  styleUrls: ['./shopping-cart-manager.component.css']
})
export class ShoppingCartManagerComponent {

  @ViewChild('amountInput', {static: true})
  amountElement: ElementRef;

  @Output()
  ingredientEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  addItemToCart(nameInput: HTMLInputElement) {
    this.ingredientEmitter.emit(new Ingredient(nameInput.value, this.amountElement.nativeElement.value));
  }

}
