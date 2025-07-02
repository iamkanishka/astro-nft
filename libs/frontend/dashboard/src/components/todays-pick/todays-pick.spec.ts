import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysPick } from './todays-pick';

describe('TodaysPick', () => {
  let component: TodaysPick;
  let fixture: ComponentFixture<TodaysPick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysPick]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysPick);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
