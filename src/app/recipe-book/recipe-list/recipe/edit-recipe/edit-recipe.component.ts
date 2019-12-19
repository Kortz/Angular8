import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  private editMode: boolean = false;
  selectedIngredient: number;
  recipe: Recipe;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      ingredientData: new FormGroup({
        ingredientName: new FormControl(null),
        ingredientAmount: new FormControl(null)
      })
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params.id != null;
        if (this.editMode) {
          this.recipe = this.recipesService.getRecipe(params.id);
        } else {
          this.recipe = new Recipe(this.recipesService.getRecipes().length + 1, '', '', '', []);
        }

        this.form.setValue({
          title: this.recipe.title,
          description: this.recipe.description,
          ingredientData: {
            ingredientName: '',
            ingredientAmount: ''
          }
        });
      }
    );
  }

  onEditItem(index: number) {
    this.selectedIngredient = index;
  }

  deleteIngredient() {
    this.recipe.ingredients.splice(this.selectedIngredient, 1);
    this.selectedIngredient = null;
  }

  submit() {
    console.log(this.form);
    this.recipe.title = this.form.value.title;
    this.recipe.description = this.form.value.description;
    this.recipesService.updateRecipe(this.recipe);
  }

}
