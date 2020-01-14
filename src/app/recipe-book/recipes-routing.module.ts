import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-list/recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-list/recipe/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipe-list/recipe/edit-recipe/edit-recipe.component';
import { AuthGuardService } from '../auth/auth.guard';
import { RecipesResolverService } from '../shared/recipes-resolver.service';

const routes: Routes = [
    {path: 'recipes', component: RecipeBookComponent, canActivate: [ AuthGuardService ], children: [
        {path: '', component: RecipeStartComponent},
        {path: 'recipe/new', component: EditRecipeComponent},
        {path: 'recipe/:id', component: RecipeDetailComponent, resolve: [ RecipesResolverService ]},
        {path: 'recipe/edit/:id', component: EditRecipeComponent, resolve: [ RecipesResolverService ]}
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]

})
export class RecipesRoutingModule {

}
