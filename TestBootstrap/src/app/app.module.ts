import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffcanvasComponent } from './practicas-bootstrap5/offcanvas/offcanvas.component';
import { GridComponent } from './practicas-bootstrap5/grid/grid.component';
import { ColumnasAnidadasComponent } from './practicas-bootstrap5/columnas-anidadas/columnas-anidadas.component';
import { RowColumnsComponent } from './practicas-bootstrap5/row-columns/row-columns.component';
import { ColumnasAlineadasVerticalmenteComponent } from './practicas-bootstrap5/columnas-alineadas-verticalmente/columnas-alineadas-verticalmente.component';
import { ColumnasAlineadasHorizontalmenteComponent } from './practicas-bootstrap5/columnas-alineadas-horizontalmente/columnas-alineadas-horizontalmente.component';
import { GuttersComponent } from './practicas-bootstrap5/gutters/gutters.component';
import { UtilidadesComponent } from './practicas-bootstrap5/utilidades/utilidades.component';
import { SitioResponsiveComponent } from './practicas-bootstrap5/sitio-responsive/sitio-responsive.component';
import { TipografiaParte1Component } from './practicas-bootstrap5/tipografia-parte1/tipografia-parte1.component';
import { TipografiaParte2Component } from './practicas-bootstrap5/tipografia-parte2/tipografia-parte2.component';
import { ImagenesComponent } from './practicas-bootstrap5/imagenes/imagenes.component';
import { TablasComponent } from './practicas-bootstrap5/tablas/tablas.component';
import { AcordeonComponent } from './practicas-bootstrap5/acordeon/acordeon.component';
import { AlertasComponent } from './practicas-bootstrap5/alertas/alertas.component';
import { InsigniasComponent } from './practicas-bootstrap5/insignias/insignias.component';
import { BreadcrumbsComponent } from './practicas-bootstrap5/breadcrumbs/breadcrumbs.component';
import { BotonesComponent } from './practicas-bootstrap5/botones/botones.component';
import { GrupoBotonesComponent } from './practicas-bootstrap5/grupo-botones/grupo-botones.component';
import { CardsComponent } from './practicas-bootstrap5/cards/cards.component';
import { Cards2Component } from './practicas-bootstrap5/cards2/cards2.component';
import { CarouselComponent } from './practicas-bootstrap5/carousel/carousel.component';
import { CollapseComponent } from './practicas-bootstrap5/collapse/collapse.component';
import { FormulariosComponent } from './practicas-bootstrap5/formularios/formularios.component';
import { FormulariosSelectboxComponent } from './practicas-bootstrap5/formularios-selectbox/formularios-selectbox.component';
import { FormulariosCheckboxyradiosComponent } from './practicas-bootstrap5/formularios-checkboxyradios/formularios-checkboxyradios.component';
import { FormulariosRangeComponent } from './practicas-bootstrap5/formularios-range/formularios-range.component';
import { FormulariosInputGroupComponent } from './practicas-bootstrap5/formularios-input-group/formularios-input-group.component';
import { FormulariosFloatinglabelsComponent } from './practicas-bootstrap5/formularios-floatinglabels/formularios-floatinglabels.component';
import { FormulariosPracticaGridComponent } from './practicas-bootstrap5/formularios-practica-grid/formularios-practica-grid.component';
import { FormulariosValidacionComponent } from './practicas-bootstrap5/formularios-validacion/formularios-validacion.component';
import { ListGroupComponent } from './practicas-bootstrap5/list-group/list-group.component';
import { ModalComponent } from './practicas-bootstrap5/modal/modal.component';
import { NavsComponent } from './practicas-bootstrap5/navs/navs.component';
import { NavbarComponent } from './practicas-bootstrap5/navbar/navbar.component';
import { OffcanvasMenuComponentesComponent } from './practicas-bootstrap5/offcanvas-menu-componentes/offcanvas-menu-componentes.component';
import { PaginacionComponent } from './practicas-bootstrap5/paginacion/paginacion.component';
import { DropdownComponent } from './practicas-bootstrap5/dropdown/dropdown.component';
import { PopoversComponent } from './practicas-bootstrap5/popovers/popovers.component';
import { ProgressBarComponent } from './practicas-bootstrap5/progress-bar/progress-bar.component';
import { SpinnersComponent } from './practicas-bootstrap5/spinners/spinners.component';
import { ToastsComponent } from './practicas-bootstrap5/toasts/toasts.component';
import { TooltipsComponent } from './practicas-bootstrap5/tooltips/tooltips.component';
import { TestNgbootstrapLibraryComponent } from './practicas-bootstrap5/test-ngbootstrap-library/test-ngbootstrap-library.component';
import { Flexbox1Component } from './practicas-bootstrap5/flexbox1/flexbox1.component';
import { Flexbox2Component } from './practicas-bootstrap5/flexbox2/flexbox2.component';
import { Flexbox3Component } from './practicas-bootstrap5/flexbox3/flexbox3.component';
import { UtilidadesEnlacesColoreadosComponent } from './practicas-bootstrap5/utilidades-enlaces-coloreados/utilidades-enlaces-coloreados.component';
import { UtilidadesRatiosComponent } from './practicas-bootstrap5/utilidades-ratios/utilidades-ratios.component';
import { UtilidadesPositionComponent } from './practicas-bootstrap5/utilidades-position/utilidades-position.component';
import { VisuallyHiddenComponent } from './practicas-bootstrap5/visually-hidden/visually-hidden.component';
import { StrechedLinksComponent } from './practicas-bootstrap5/streched-links/streched-links.component';
import { FondosComponent } from './practicas-bootstrap5/fondos/fondos.component';
import { BordesComponent } from './practicas-bootstrap5/bordes/bordes.component';
import { OverflowComponent } from './practicas-bootstrap5/overflow/overflow.component';
import { SombrasComponent } from './practicas-bootstrap5/sombras/sombras.component';
import { SizingComponent } from './practicas-bootstrap5/sizing/sizing.component';
import { PracticasBootstrap5Module } from './practicas-bootstrap5/practicas-bootstrap5.module';
import { PortafolioModule } from './portafolio/portafolio.module';

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
    PopoversComponent,
    ProgressBarComponent,
    SpinnersComponent,
    ToastsComponent,
    TooltipsComponent,
    TestNgbootstrapLibraryComponent,
    Flexbox1Component,
    Flexbox2Component,
    Flexbox3Component,
    UtilidadesEnlacesColoreadosComponent,
    UtilidadesRatiosComponent,
    UtilidadesPositionComponent,
    VisuallyHiddenComponent,
    StrechedLinksComponent,
    FondosComponent,
    BordesComponent,
    OverflowComponent,
    SombrasComponent,
    SizingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PracticasBootstrap5Module,
    PortafolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
