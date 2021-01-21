import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@firebase/auth-types';
import { Observable } from 'rxjs';
import { UserFacadeService } from '@libs/auth';
import { Album } from '../../interfaces/album.interface';

import { AlbumsFacadeService } from '../../services/facade/albums/albums-facade.service';

@Component({
  selector: 'lib-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]>;

  user$: Observable<UserInfo>;

  constructor(
    private albumsFacadeService: AlbumsFacadeService,
    private userFacadeService: UserFacadeService,
  ) {
    this.albums$ = albumsFacadeService.albums$;
    this.user$ = userFacadeService.user$;
  }

  ngOnInit(): void {
    this.albumsFacadeService.loadAlbums();
    this.userFacadeService.user();
  }
}
