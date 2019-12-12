import { Ingredient } from './ingredient/ingredient.model';
import { EventEmitter } from '@angular/core';

export class CartService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}
