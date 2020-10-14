import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseItemSourceComponent } from './showcase-item-source.component';

describe('ShowcaseItemSourceComponent', () => {
  let component: ShowcaseItemSourceComponent;
  let fixture: ComponentFixture<ShowcaseItemSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseItemSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseItemSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
