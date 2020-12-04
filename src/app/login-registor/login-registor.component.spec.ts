import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistorComponent } from './login-registor.component';

describe('LoginRegistorComponent', () => {
  let component: LoginRegistorComponent;
  let fixture: ComponentFixture<LoginRegistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
