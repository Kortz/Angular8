import { NgModule } from '@angular/core';

import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class ShoppingRouterModule {

}
