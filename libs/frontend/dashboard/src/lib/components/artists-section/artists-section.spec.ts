import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsSection } from './artists-section';

describe('ArtistsSection', () => {
  let component: ArtistsSection;
  let fixture: ComponentFixture<ArtistsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
