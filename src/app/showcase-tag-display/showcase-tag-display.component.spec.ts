import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseTagDisplayComponent } from './showcase-tag-display.component';

describe('ShowcaseTagDisplayComponent', () => {
  let component: ShowcaseTagDisplayComponent;
  let fixture: ComponentFixture<ShowcaseTagDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseTagDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseTagDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
