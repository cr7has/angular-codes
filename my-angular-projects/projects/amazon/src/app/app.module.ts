import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    //AppComponent
    //LoginComponent,
    RegisterComponent,
  ],
})
export class AppModule {}
