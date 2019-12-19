import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient.model';
import { CartService } from 'src/app/shared/cart.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-manager',
  templateUrl: './shopping-cart-manager.component.html',
  styleUrls: ['./shopping-cart-manager.component.css']
})
export class ShoppingCartManagerComponent implements OnInit, OnDestroy {
  // @ViewChild('amountInput', {static: true})
  // amountElement: ElementRef;
  @ViewChild('f', {static: false})
  form: NgForm;

  editingIngredientSubscription: Subscription;
  ingredientSelected: number;

  constructor(private cartService: CartService) { }

  // addItemToCart(nameInput: HTMLInputElement) {
  //   this.cartService.addIngredient(new Ingredient(nameInput.value, this.amountElement.nativeElement.value));
  // }

  ngOnInit(): void {
    this.editingIngredientSubscription = this.cartService.startedEditing.subscribe(
      (index: number) => {
        this.ingredientSelected = index;
        const ingredient: Ingredient = this.cartService.getIngredient(index);
        this.form.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editingIngredientSubscription.unsubscribe();
  }

  addItemToCart(formInput: NgForm) {
    if (this.isEditingIngredient()) {
      console.log('Editing existing ingredient!');
      this.cartService.updateIngredient(this.ingredientSelected, new Ingredient(formInput.value.name, formInput.value.amount));
    } else {
      console.log('Adding new ingredient!');
      this.cartService.addIngredient(new Ingredient(formInput.value.name, formInput.value.amount));
    }
    this.ingredientSelected = undefined;
    this.form.reset();
  }

  isEditingIngredient() {
    return !(this.ingredientSelected === undefined);
  }

  onDelete() {
    this.cartService.deleteIngredient(this.ingredientSelected);
    this.ingredientSelected = undefined;
  }

  onClear() {
    this.cartService.clearIngredients();
    this.ingredientSelected = undefined;
  }

}
