import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongFromPlayListComponent } from './song-from-play-list.component';

describe('SongFromPlayListComponent', () => {
  let component: SongFromPlayListComponent;
  let fixture: ComponentFixture<SongFromPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongFromPlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongFromPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
