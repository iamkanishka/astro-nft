import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosSection } from './heros-section';

describe('HerosSection', () => {
  let component: HerosSection;
  let fixture: ComponentFixture<HerosSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerosSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
