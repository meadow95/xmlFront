import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagoviComponent } from './tagovi.component';

describe('TagoviComponent', () => {
  let component: TagoviComponent;
  let fixture: ComponentFixture<TagoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
