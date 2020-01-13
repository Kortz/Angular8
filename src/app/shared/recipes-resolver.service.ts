import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Recipe } from '../recipe-book/recipe-list/recipe/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipesService } from './recipes.service';


@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(
        private dataStorageService: DataStorageService, private recipesService: RecipesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        console.log('Trying to resolve data!');

        const recipes = this.recipesService.getRecipes();
        if (recipes.length > 0) {
            return recipes;
        } else {
            return this.dataStorageService.fetchData();
        }
    }

}
