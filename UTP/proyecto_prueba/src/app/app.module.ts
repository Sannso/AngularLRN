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
import { LoginComponent } from './login/login.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';
import { RegisterComponent } from './register/register.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PadreComponent,
    HijoComponent,
    LoginComponent,
    RickandmortyComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
