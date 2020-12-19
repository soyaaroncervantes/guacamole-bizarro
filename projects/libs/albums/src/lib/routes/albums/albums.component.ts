import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@firebase/auth-types';
import { Album } from '../../interfaces/album.interface';

import { FacadeUserService } from '@libs/auth';
import { FacadeAlbumsService } from '../../services/facade/facade-albums.service';

import { Observable } from 'rxjs';

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
