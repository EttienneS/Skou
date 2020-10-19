import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTagDisplayComponent } from './technology-tag-display.component';

describe('ShowcaseTagDisplayComponent', () => {
  let component: TechnologyTagDisplayComponent;
  let fixture: ComponentFixture<TechnologyTagDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyTagDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTagDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
