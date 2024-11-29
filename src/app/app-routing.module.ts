import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordValidationPage } from './password-validation/password-validation.page'; // Importar la página

const routes: Routes = [
  {
    path: '',
    redirectTo: 'password-validation',  // Redirigir al componente PasswordValidationPage
    pathMatch: 'full'
  },
  {
    path: 'password-validation',
    component: PasswordValidationPage  // Asegúrate de que este es el componente correcto
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
