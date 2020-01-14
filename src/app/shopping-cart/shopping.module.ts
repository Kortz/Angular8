import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingCartManagerComponent } from './shopping-cart-manager/shopping-cart-manager.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingRouterModule } from './shopping-router.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        ShoppingRouterModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        ShoppingCartManagerComponent,
        ShoppingCartComponent
    ],
    bootstrap: [ ],
    providers: [ ],
    entryComponents: [ ],
    exports: [ ]
})
export class ShoppingModule { }
