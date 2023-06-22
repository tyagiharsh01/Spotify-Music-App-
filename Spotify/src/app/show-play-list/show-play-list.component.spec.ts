import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlayListComponent } from './show-play-list.component';

describe('ShowPlayListComponent', () => {
  let component: ShowPlayListComponent;
  let fixture: ComponentFixture<ShowPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
