import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditarTecnicosComponent } from './pages/tecnicos/editar-tecnicos/editar-tecnicos.component';
import { CrearTecnicosComponent } from './pages/tecnicos/crear-tecnicos/crear-tecnicos.component';
import { ListarTecnicosComponent } from './pages/tecnicos/listar-tecnicos/listar-tecnicos.component';
import { LoginComponent } from './pages/users/login/login.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },

  { path: 'listar-tecnicos', component: ListarTecnicosComponent },
  { path: 'crear-tecnicos', component: CrearTecnicosComponent },
  { path: 'editar-tecnicos/:id', component: EditarTecnicosComponent },

  { path: 'tiendas', component: TiendasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
