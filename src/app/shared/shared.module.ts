import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';

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
    ],
    entryComponents: [
        AlertComponent
    ],
    providers: [
        // LoggingService
    ]
})
export class SharedModule {

}
