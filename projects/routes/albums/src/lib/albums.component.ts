import { Component, OnInit } from '@angular/core';
import { AlbumsFacadeService } from '@services/albums-facade';
import { Observable } from 'rxjs';
import { Album } from '@interfaces/album';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'lib-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;

  constructor(
    private albumsFacadeService: AlbumsFacadeService
  ) {
    this.albums$ = albumsFacadeService.albums$.pipe( pluck( 'albums' ) );
  }

  ngOnInit(): void {
    this.albumsFacadeService.get();
  }

}
