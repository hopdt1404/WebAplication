import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnentComponent } from './compnent.component';

describe('CompnentComponent', () => {
  let component: CompnentComponent;
  let fixture: ComponentFixture<CompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
