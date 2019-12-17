import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeDetailComponent } from './recipe-book/recipe-list/recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/recipe-list/recipe/recipe-start/recipe-start.component';

const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'recipe/:id', component: RecipeDetailComponent}
    ]},
    {path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
