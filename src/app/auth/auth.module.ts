import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {path: 'auth', component: AuthComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthComponent,
    ]
})
export class AuthModule { }
