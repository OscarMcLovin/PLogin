import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './Components/confirm/confirm.component';
import { HomeComponent } from './Components/home/home.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { CapitulosComponent } from './Components/capitulos/capitulos.component';
import { RolesComponent } from './Components/roles/roles.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginComponent,
    ConfirmComponent,
    HomeComponent,
    VentasComponent,
    CapitulosComponent,
    RolesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
