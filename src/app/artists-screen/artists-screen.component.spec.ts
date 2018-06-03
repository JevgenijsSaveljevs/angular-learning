import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsScreenComponent } from './artists-screen.component';

describe('ArtistsScreenComponent', () => {
  let component: ArtistsScreenComponent;
  let fixture: ComponentFixture<ArtistsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
