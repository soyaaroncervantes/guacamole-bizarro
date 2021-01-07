import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { UserCredential, UserInfo } from '@firebase/auth-types';

export const getUserInfo = <T = UserCredential, U = UserInfo>( observable: Observable<T> ): Observable<U> =>
  observable.pipe(
    pluck( 'user', 'providerData' ),
    map( array => array[0] )
  );
