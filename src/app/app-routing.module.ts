import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeDetailComponent } from './recipe-book/recipe-list/recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/recipe-list/recipe/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipe-book/recipe-list/recipe/edit-recipe/edit-recipe.component';
import { RecipesResolverService } from './shared/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, canActivate: [ AuthGuardService ], children: [
        {path: '', component: RecipeStartComponent},
        {path: 'recipe/new', component: EditRecipeComponent},
        {path: 'recipe/:id', component: RecipeDetailComponent, resolve: [ RecipesResolverService ]},
        {path: 'recipe/edit/:id', component: EditRecipeComponent, resolve: [ RecipesResolverService ]}
    ]},
    {path: 'auth', component: AuthComponent},
    {path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
