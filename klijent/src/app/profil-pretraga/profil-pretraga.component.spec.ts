import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPretragaComponent } from './profil-pretraga.component';

describe('ProfilPretragaComponent', () => {
  let component: ProfilPretragaComponent;
  let fixture: ComponentFixture<ProfilPretragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPretragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
