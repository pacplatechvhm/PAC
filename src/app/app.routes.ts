import { Routes } from '@angular/router';
import {ConsultarAdminComponent} from './feature/admin/consultar/consultar.component';

export const routes: Routes = [
  {
    path: 'admin',
    children: [
      {path: 'consultar', component: ConsultarAdminComponent }
    ]
  },
];
