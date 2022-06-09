import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
