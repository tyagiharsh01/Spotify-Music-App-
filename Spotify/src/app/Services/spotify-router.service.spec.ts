import { TestBed } from '@angular/core/testing';

import { SpotifyRouterService } from '../../app/Services/spotify-router.service';

describe('SpotifyRouterService', () => {
  let service: SpotifyRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
