import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseItemDisplayComponent } from './showcase-item-display.component';

describe('ShowcaseItemDisplayComponent', () => {
  let component: ShowcaseItemDisplayComponent;
  let fixture: ComponentFixture<ShowcaseItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseItemDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
