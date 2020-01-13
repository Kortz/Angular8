import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { RecipesService } from './recipes.service';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient/ingredient.model';

@Injectable()
export class DataStorageService {

    private url = 'https://courseproject-3ccf7.firebaseio.com/';

    constructor(private http: HttpClient, private recipesService: RecipesService) {}

    fetchData() {
        const destination = this.url + 'recipes.json';
        this.http.get<Recipe[]>(destination)
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients === undefined ? recipe.ingredients : []};
            });
        }))
        .subscribe(responseData => {
            this.recipesService.setRecipes(responseData);
            console.log('Retrieved recipes from firebase!');
        });
    }

    saveData() {
        const recipes = this.recipesService.getRecipes();

        this.http.put(this.url + 'recipes.json', recipes).subscribe(() => {
            console.log('All Recipes Stored');
        });
    }
}
