import { NgModule } from '@angular/core';

import {
    MatButtonModule, MatCheckboxModule, MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule, MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatDividerModule
    ],
})
export class CustomMaterialModule { }
