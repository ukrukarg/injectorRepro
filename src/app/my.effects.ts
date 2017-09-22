import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Inject, Injectable, Injector } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as ng from './types.d';

export class SomeAction implements Action {
    readonly type = 'any';

    constructor(public payload: string) {}
}

export class SomeActionSucceded implements Action {
    readonly type = 'any succeeded';

    constructor(public payload: string) {}
}

export class SomeActionFailed implements Action {
    readonly type = 'any failed';

    constructor(public payload: any) {}
}

@Injectable()
export class MyEffects {

    @Effect()
    someEffect$ = this.action$
        .ofType<SomeAction>('any')
        .startWith(new SomeAction('!'))
        .map(toPayload)
        .switchMap(payload =>
            Observable.fromPromise(this.$http.get<string>('/somepath/' + payload))
                .map(result => new SomeActionSucceded(result.data))
                .catch(result => of(new SomeActionFailed(result)))
        );

    get $http(): ng.IHttpService  {
      return this.injector.get('$http');
    }

    constructor(private action$: Actions, private injector: Injector) {
    }
}
