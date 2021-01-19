import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatCheckboxModule, MatToolbarModule],
  exports: [MatCheckboxModule, MatToolbarModule],
})
export class MaterialModule {}
