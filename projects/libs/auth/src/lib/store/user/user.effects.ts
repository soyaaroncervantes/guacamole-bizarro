import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CreateUserApiService } from '../../services/api/create-user/create-user-api.service';
import { SignInApiService } from '../../services/api/sign-in/sign-in-api.service';
import { SignOutApiService } from '../../services/api/sign-out/sign-out-api.service';
import { UserApiService } from '../../services/api/user/user-api.service';

import * as fromAction from './user.actions';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private createUserApiService: CreateUserApiService,
    private signInApiService: SignInApiService,
    private signOutApiService: SignOutApiService,
    private userApiService: UserApiService
  ) { }

  createUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.createUser ),
      mergeMap( ({ user }) => this.createUserApiService.createUser$( user ) ),
      mergeMap( () => this.userApiService.user$ ),
      map( userInfo => fromAction.userSuccess({ userInfo }) ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );


  user$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.getUser ),
      mergeMap( () => this.userApiService.user$ ),
      map( userInfo => fromAction.userSuccess({ userInfo }) ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );

  loginUser$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.loginGoogle ),
      mergeMap( () => this.signInApiService.signInWithGoogle$ ),
      mergeMap( () => this.userApiService.user$ ),
      map( userInfo => fromAction.userSuccess({ userInfo }) ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );

  loginGoogle$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.login ),
      mergeMap( ({ user }) => this.signInApiService.signInEmailAndPassword$( user )),
      mergeMap( () => this.userApiService.user$ ),
      map( userInfo => fromAction.userSuccess({ userInfo }) ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );

  loginTwitter$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.loginTwitter ),
      mergeMap( () => this.signInApiService.signInWithTwitter$ ),
      mergeMap( () => this.userApiService.user$ ),
      map( userInfo => fromAction.userSuccess({ userInfo }) ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );


  loginFacebook$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.loginFacebook ),
      mergeMap( () => this.signInApiService.signInWithFacebook$ ),
      mergeMap( () => this.userApiService.user$ ),
      map( userInfo => fromAction.userSuccess({ userInfo }) ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );

  logout$ = createEffect( () =>
    this.actions$.pipe(
      ofType( fromAction.logout ),
      mergeMap( () => this.signOutApiService.signOut$ ),
      map( () => fromAction.logoutSuccess() ),
      catchError( errors => of( fromAction.userFailure({ errors }) ) )
    )
  );

}
