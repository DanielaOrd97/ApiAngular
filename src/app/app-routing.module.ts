import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburguerComponent } from './hamburguer/hamburguer.component';
import { AddhamburguerComponent } from './addhamburguer/addhamburguer.component';
import { EdithamburguerComponent } from './edithamburguer/edithamburguer.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirige la ruta vacía a 'main'
  { path: 'main', component: HamburguerComponent },
  {
    path: 'add-burguer',
    component: AddhamburguerComponent,
  },
  {
    path: 'edit-burguer/:id',
    component: EdithamburguerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
