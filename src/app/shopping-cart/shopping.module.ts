import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingCartManagerComponent } from './shopping-cart-manager/shopping-cart-manager.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
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
