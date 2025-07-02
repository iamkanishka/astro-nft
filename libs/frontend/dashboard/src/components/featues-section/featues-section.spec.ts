import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatuesSection } from './featues-section';

describe('FeatuesSection', () => {
  let component: FeatuesSection;
  let fixture: ComponentFixture<FeatuesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatuesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatuesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
