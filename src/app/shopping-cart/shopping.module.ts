import { NgModule } from '@angular/core';

import { ShoppingCartManagerComponent } from './shopping-cart-manager/shopping-cart-manager.component';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    imports: [
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
