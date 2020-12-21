import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@firebase/auth-types';
import { Album } from '../../interfaces/album.interface';

import { FacadeUserService } from '@libs/auth';
import { AlbumsFacadeService } from '../../services/facade/albums/albums-facade.service';

import { Observable } from 'rxjs';
import { NotificationsFacadeService } from '../../services/facade/notifications/notifications-facade.service';

@Component({
  selector: 'lib-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;
  user$: Observable<UserInfo>;

  constructor(
    private albumsFacadeService: AlbumsFacadeService,
    private facadeUserService: FacadeUserService,
    private notificationsFacadeService: NotificationsFacadeService,
  ) {
    this.albums$ = albumsFacadeService.albums$;
    this.user$ = facadeUserService.info;
  }

  ngOnInit(): void {
    this.albumsFacadeService.loadAlbums();
    this.facadeUserService.dispatchUser();
  }

  addAlbum(): void {
    this.notificationsFacadeService.addAlbum();
  }

}
