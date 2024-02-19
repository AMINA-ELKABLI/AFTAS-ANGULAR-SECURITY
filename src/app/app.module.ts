import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { RegisterComponent } from './register/register.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminTemplateComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS, useClass :AppHttpInterceptor , multi :true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
