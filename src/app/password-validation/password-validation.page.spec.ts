import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordValidationPage } from './password-validation.page';

describe('PasswordValidationPage', () => {
  let component: PasswordValidationPage;
  let fixture: ComponentFixture<PasswordValidationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
