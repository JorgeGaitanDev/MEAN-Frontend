import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearInformeComponent } from './components/crear-informe/crear-informe.component';
//import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

// componentes
//import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarInformeComponent } from './components/listar-informe/listar-informe.component';

const routes: Routes = [
  { path: '', component: ListarInformeComponent },
  { path: 'crear-informe', component: CrearInformeComponent },
  { path: 'editar-informe/:id', component: CrearInformeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
