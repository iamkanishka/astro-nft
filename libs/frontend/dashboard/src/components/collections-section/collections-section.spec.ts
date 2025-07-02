import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsSection } from './collections-section';

describe('CollectionsSection', () => {
  let component: CollectionsSection;
  let fixture: ComponentFixture<CollectionsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
