import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { Inject, Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MyEffects {

    @Effect()
    someEffect$: Observable<Action>  = this.action$
        .ofType('any')
        .map(toPayload)
        .switchMap((payload) => payload);

    constructor(private action$: Actions, @Inject('$rootScope') private $rootScope) {
    }
}
