import { NgModule } from '@angular/core';

import { ShoppingCartManagerComponent } from './shopping-cart-manager/shopping-cart-manager.component';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    imports: [
        ShoppingCartManagerComponent,
        ShoppingCartComponent,
    ],
    declarations: [ ],
    bootstrap: [ ],
    providers: [ ],
    entryComponents: [ ]
})
export class ShoppingModule { }
