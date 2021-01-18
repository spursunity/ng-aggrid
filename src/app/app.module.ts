import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './table/table.module';
import { appState } from './store';
import { HttpHelperService } from '@shared/helper/http-helper.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TableModule, StoreModule.forRoot(appState)],
  providers: [HttpHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
