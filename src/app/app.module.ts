import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './table/table.module';
import { appState } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule, StoreModule.forRoot(appState)],
  bootstrap: [AppComponent],
})
export class AppModule {}
