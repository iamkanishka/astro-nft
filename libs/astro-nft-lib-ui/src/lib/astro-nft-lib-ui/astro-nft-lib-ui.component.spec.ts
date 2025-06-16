import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AstroNftLibUiComponent } from './astro-nft-lib-ui.component';

describe('AstroNftLibUiComponent', () => {
  let component: AstroNftLibUiComponent;
  let fixture: ComponentFixture<AstroNftLibUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstroNftLibUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AstroNftLibUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
