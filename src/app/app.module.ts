import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Store, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UpgradeModule } from '@angular/upgrade/static';
import { MyEffects } from './my.effects';

import { AppComponent } from './app.component';

export function rootScopeFactory($injector) {
  return $injector.get('$rootScope');
}


export interface State {
  ids: string[];
}

export const initialState: State = {
  ids: [],
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([MyEffects]),
  ],
  providers: [
    {
        provide: '$rootScope', useFactory: rootScopeFactory, deps: ['$injector']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  public ngDoBootstrap() {
    this.upgrade.bootstrap(document.getElementById('appPlaceHolder'),
      null,
      { strictDi: true });
  }
 }
