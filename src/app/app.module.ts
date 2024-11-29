import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PasswordValidationPage } from './password-validation/password-validation.page'; // Importar la página
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidationPage // Declarar la página aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule // Asegúrate de importar FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
