import { Ingredient } from './ingredient/ingredient.model';
import { Subject } from 'rxjs';

export class CartService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    ingredientsChanged = new Subject<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}
