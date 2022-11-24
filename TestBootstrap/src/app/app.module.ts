import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { GridComponent } from './grid/grid.component';
import { ColumnasAnidadasComponent } from './columnas-anidadas/columnas-anidadas.component';
import { RowColumnsComponent } from './row-columns/row-columns.component';
import { ColumnasAlineadasVerticalmenteComponent } from './columnas-alineadas-verticalmente/columnas-alineadas-verticalmente.component';
import { ColumnasAlineadasHorizontalmenteComponent } from './columnas-alineadas-horizontalmente/columnas-alineadas-horizontalmente.component';
import { GuttersComponent } from './gutters/gutters.component';
import { UtilidadesComponent } from './utilidades/utilidades.component';
import { SitioResponsiveComponent } from './sitio-responsive/sitio-responsive.component';
import { TipografiaParte1Component } from './tipografia-parte1/tipografia-parte1.component';
import { TipografiaParte2Component } from './tipografia-parte2/tipografia-parte2.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { TablasComponent } from './tablas/tablas.component';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { AlertasComponent } from './alertas/alertas.component';
import { InsigniasComponent } from './insignias/insignias.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BotonesComponent } from './botones/botones.component';
import { GrupoBotonesComponent } from './grupo-botones/grupo-botones.component';
import { CardsComponent } from './cards/cards.component';
import { Cards2Component } from './cards2/cards2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { FormulariosSelectboxComponent } from './formularios-selectbox/formularios-selectbox.component';
import { FormulariosCheckboxyradiosComponent } from './formularios-checkboxyradios/formularios-checkboxyradios.component';
import { FormulariosRangeComponent } from './formularios-range/formularios-range.component';
import { FormulariosInputGroupComponent } from './formularios-input-group/formularios-input-group.component';
import { FormulariosFloatinglabelsComponent } from './formularios-floatinglabels/formularios-floatinglabels.component';
import { FormulariosPracticaGridComponent } from './formularios-practica-grid/formularios-practica-grid.component';
import { FormulariosValidacionComponent } from './formularios-validacion/formularios-validacion.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { NavsComponent } from './navs/navs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffcanvasMenuComponentesComponent } from './offcanvas-menu-componentes/offcanvas-menu-componentes.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PopoversComponent } from './popovers/popovers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OffcanvasComponent,
    GridComponent,
    ColumnasAnidadasComponent,
    RowColumnsComponent,
    ColumnasAlineadasVerticalmenteComponent,
    ColumnasAlineadasHorizontalmenteComponent,
    GuttersComponent,
    UtilidadesComponent,
    SitioResponsiveComponent,
    TipografiaParte1Component,
    TipografiaParte2Component,
    ImagenesComponent,
    TablasComponent,
    AcordeonComponent,
    AlertasComponent,
    InsigniasComponent,
    BreadcrumbsComponent,
    BotonesComponent,
    GrupoBotonesComponent,
    CardsComponent,
    Cards2Component,
    CarouselComponent,
    CollapseComponent,
    FormulariosComponent,
    FormulariosSelectboxComponent,
    FormulariosCheckboxyradiosComponent,
    FormulariosRangeComponent,
    FormulariosInputGroupComponent,
    FormulariosFloatinglabelsComponent,
    FormulariosPracticaGridComponent,
    FormulariosValidacionComponent,
    ListGroupComponent,
    ModalComponent,
    NavsComponent,
    NavbarComponent,
    OffcanvasMenuComponentesComponent,
    PaginacionComponent,
    DropdownComponent,
    PopoversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
