import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseItemContainerComponent } from './showcase-item-container.component';

describe('ShowcaseItemSourceComponent', () => {
  let component: ShowcaseItemContainerComponent;
  let fixture: ComponentFixture<ShowcaseItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseItemContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
