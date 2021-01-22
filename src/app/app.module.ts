import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './table/table.module';
import { appState } from './store';
import { HttpHelperService } from '@shared/helper/http-helper.service';
import { MaterialModule } from './material/material.module';
import { tableEffects } from '@store/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot(tableEffects),
    MaterialModule,
  ],
  providers: [HttpHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
