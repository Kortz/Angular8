import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    // {path: '', redirectTo: '/auth', pathMatch: 'full'},
    // {path: 'recipes', loadChildren: () => import('./recipe-book/recipes.module').then(mod => mod.RecipesModule)},
    // {path: 'cart', loadChildren: () => import('./shopping-cart/shopping.module').then(mod => mod.ShoppingModule)},
    // {path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}

    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule' },
    {
      path: 'cart',
      loadChildren: './shopping-cart/shopping.module#ShoppingModule'
    },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }

];

@NgModule({
    // imports: [ RouterModule.forRoot(routes, { useHash: true })],
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
