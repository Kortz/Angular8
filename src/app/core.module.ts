import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CartService } from './shared/cart.service';
import { RecipesService } from './shared/recipes.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
    providers: [
        CartService,
        RecipesService,
        DataStorageService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ]
})
export class CoreModule { }
