import * as fromAlbums from './albums.actions';

describe('loadAlbumss', () => {
  it('should return an action', () => {
    expect(fromAlbums.loadAlbumss().type).toBe('[Albums] Load Albumss');
  });
});
