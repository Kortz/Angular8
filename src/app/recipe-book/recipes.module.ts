import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-list/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-list/recipe/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipe-list/recipe/edit-recipe/edit-recipe.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth.guard';
import { RecipesResolverService } from '../shared/recipes-resolver.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'recipes', component: RecipeBookComponent, canActivate: [ AuthGuardService ], children: [
                {path: '', component: RecipeStartComponent},
                {path: 'recipe/new', component: EditRecipeComponent},
                {path: 'recipe/:id', component: RecipeDetailComponent, resolve: [ RecipesResolverService ]},
                {path: 'recipe/edit/:id', component: EditRecipeComponent, resolve: [ RecipesResolverService ]}
            ]}
        ]),
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        EditRecipeComponent
    ],
    bootstrap: [ ],
    providers: [ ],
    entryComponents: [ ],
    exports: [ ]
})
export class RecipesModule {

}
