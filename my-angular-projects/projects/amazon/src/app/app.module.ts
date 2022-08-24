import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { TwoWayDataBindingComponent } from './Components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './Components/directives/directives.component';
import { ContentProjectionComponent } from './Components/content-projection/content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    DatabindingComponent,
    TwoWayDataBindingComponent,
    DirectivesComponent,
    ContentProjectionComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [
    //AppComponent
    //LoginComponent,
    //RegisterComponent,
    //ContactComponent,
    // DatabindingComponent,
    // TwoWayDataBindingComponent,
    // DirectivesComponent,
    ContentProjectionComponent,
  ],
})
export class AppModule {}
