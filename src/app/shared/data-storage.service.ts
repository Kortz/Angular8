import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { RecipesService } from './recipes.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Ingredient } from './ingredient/ingredient.model';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthToken } from '../auth/auth-token.model';

@Injectable()
export class DataStorageService {
    private url = 'https://courseproject-3ccf7.firebaseio.com/';
    authToken: AuthToken;
    authSubscription: Subscription;

    constructor(private http: HttpClient, private recipesService: RecipesService, private authService: AuthService) {

    }

    fetchData() {
        const destination = this.url + 'recipes.json';
        return this.authService.userChanged.pipe(take(1), exhaustMap(user => {
            return this.http.get<Recipe[]>(destination, {
                params: {auth: user != null ? user.getTokenId() : null}
            });
        }), map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }),
        tap((recipes) => {
            this.recipesService.setRecipes(recipes);
        }));
    }

    saveData() {
        const recipes = this.recipesService.getRecipes();
        this.authService.userChanged.pipe(take(1), exhaustMap(user => {
            return this.http.put(this.url + 'recipes.json', recipes, {
                params: {auth: user != null ? user.getTokenId() : null}
            });
        })).subscribe(() => {
            console.log('All Recipes Stored');
        });
    }

}
