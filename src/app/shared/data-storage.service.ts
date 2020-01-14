import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { RecipesService } from './recipes.service';
import { map, tap } from 'rxjs/operators';
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

    // ngOnInit() {
    //     this.authSubscription = this.authService.authChanged.subscribe((token: AuthToken) => {
    //         this.authToken = token;
    //     });
    // }

    // ngOnDestroy() {
    //     this.authSubscription.unsubscribe();
    // }

    fetchData(): Observable<Recipe[]> {
        const destination = this.url + 'recipes.json';
        return this.http.get<Recipe[]>(destination, {
            params: {auth: this.getToken()}
        })
        .pipe(map(recipes => {
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
        this.http.put(this.url + 'recipes.json', recipes, {
            params: {auth: this.getToken()}
        }).subscribe(() => {
            console.log('All Recipes Stored');
        });
    }

    getToken() {
        const user = this.authService.getCurrentlyLoggedInUser();
        console.log(user);
        return (user != null || user != undefined) ? user.getTokenId() : null;
    }
}
