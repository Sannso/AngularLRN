import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { LoginComponent } from './login/login.component';
import { PadreComponent } from './padre/padre.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';

const routes: Routes = [
  {path: 'padre', component: PadreComponent},
  {path: 'hijo', component: HijoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rickandmorty', component: RickandmortyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
