import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Store, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { MyEffects } from './my.effects';

import { AppComponent } from './app.component';

export function httpFactory($injector) {
  return $injector.get('$http');
}

const app = (window as any).angular.module('myApp', [])
  .directive('appRoot', downgradeComponent({ component: AppComponent }));

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
  entryComponents: [AppComponent],
  providers: [
    {
      provide: '$http', useFactory: httpFactory, deps: ['$injector']
    }
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule, private store: Store<any>) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.getElementById('appPlaceHolder'),
      ['myApp'],
      { strictDi: true });

    this.store.dispatch({ type: 'any' });
  }
 }
