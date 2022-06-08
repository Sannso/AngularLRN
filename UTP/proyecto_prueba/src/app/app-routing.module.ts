import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

const routes: Routes = [
  {path: 'padre', component: PadreComponent},
  {path: 'hijo', component: HijoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
