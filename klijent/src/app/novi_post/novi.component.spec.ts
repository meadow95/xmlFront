import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviComponent } from './novi.component';

describe('NoviComponent', () => {
  let component: NoviComponent;
  let fixture: ComponentFixture<NoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
