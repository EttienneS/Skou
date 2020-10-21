import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseItemExpandedComponent } from './showcase-item-expanded.component';

describe('ShowcaseItemExpandedComponent', () => {
  let component: ShowcaseItemExpandedComponent;
  let fixture: ComponentFixture<ShowcaseItemExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseItemExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseItemExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
