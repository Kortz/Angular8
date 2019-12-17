import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model';

export class Recipe {
  constructor(public id: number, public title: string, public description: string,
              public imagePath: string, public ingredients: Ingredient[]) { }

}
