import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '@interfaces/album';
import { FacadeAlbumsService } from '@services/facade-albums';
import { FacadeUserService } from '@services/facade-user';
import { UserInfo } from '@firebase/auth-types';

@Component({
  selector: 'lib-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;
  user$: Observable<UserInfo>;

  constructor(
    private facadeAlbumsService: FacadeAlbumsService,
    private facadeUserService: FacadeUserService
  ) {
    this.albums$ = facadeAlbumsService.albums$;
    this.user$ = facadeUserService.info;
  }

  ngOnInit(): void {
    this.facadeAlbumsService.dispatchAlbums();
    this.facadeUserService.dispatchUser();
  }

  addAlbum(): void {
    console.log('add Album');
  }

}
