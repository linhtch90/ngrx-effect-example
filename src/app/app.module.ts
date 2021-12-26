import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { fromRoot } from './store/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
