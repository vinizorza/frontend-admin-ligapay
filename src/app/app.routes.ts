import {Routes} from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { UsuarioPageComponent } from './usuario-page/usuario-page.component';
import {TransactionComponent} from './transaction/transaction.component';

export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'usuarios', component: UsuariosPageComponent},
  {path: 'usuario/:id', component: UsuarioPageComponent},
  {path: 'transacoes', component: TransactionComponent}
];
