import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export class Recipe {
  public details: RecipeDetailComponent = new RecipeDetailComponent();

  constructor(public title: string, public description: string, public imagePath: string) { }

}
