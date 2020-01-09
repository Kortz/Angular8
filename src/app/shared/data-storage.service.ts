import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';

@Injectable()
export class DataStorageService {

    private url = 'https://courseproject-3ccf7.firebaseio.com/';

    constructor(private http: HttpClient) {}

    getAllRecipes() {
        // const destination = this.url + 'recipes.json';

        // this.http.get(destination).subscribe(responseData => {
        //     recipe.id = responseData.name;
        //     console.log('Saved recipe in Firebase!');
        // });
    }

    getRecipe() {}

    saveRecipes() {}

    saveRecipe(recipe: Recipe) {
        let destination = this.url + 'recipes';
        if (recipe.id !== null) {
            destination += '/' + recipe.id;
        }
        destination += '.json';

        this.http.post(destination, recipe).subscribe(responseData => {
            recipe.id = responseData.name;
            console.log('Saved recipe in Firebase!');
        });
    }
}
