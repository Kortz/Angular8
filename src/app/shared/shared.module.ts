import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective
    ],
    exports: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        CommonModule,
    ]
})
export class SharedModule {

}
