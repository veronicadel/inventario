import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductoInventarioComponent } from './pages/producto-inventario/producto-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CategoriasComponent,
    ProductoInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
