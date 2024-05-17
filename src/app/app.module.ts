import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Componentes 3
import { AppComponent } from './app.component';
import { CrearInformeComponent } from './components/crear-informe/crear-informe.component';
import { ListarInformeComponent } from './components/listar-informe/listar-informe.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearInformeComponent,
    ListarInformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
