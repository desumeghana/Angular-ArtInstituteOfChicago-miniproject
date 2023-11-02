import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatInputModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSortModule,
        MatIconModule,
        MatProgressSpinnerModule
     ],
    exports: [
        MatCheckboxModule,
        MatInputModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSortModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
  })
  export class MaterialModule { }