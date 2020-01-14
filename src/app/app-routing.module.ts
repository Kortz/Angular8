import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
