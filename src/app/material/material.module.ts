import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatListModule],
  exports: [MatCheckboxModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatListModule],
  providers: [
    { provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions },
  ],
})
export class MaterialModule {}
