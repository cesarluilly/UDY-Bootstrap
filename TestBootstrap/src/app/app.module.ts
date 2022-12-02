import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { OffcanvasMenuComponentesComponent } from './practicas-bootstrap5/offcanvas-menu-componentes/offcanvas-menu-componentes.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastsComponent } from './toasts/toasts.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TestNgbootstrapLibraryComponent } from './test-ngbootstrap-library/test-ngbootstrap-library.component';
import { Flexbox1Component } from './flexbox1/flexbox1.component';
import { Flexbox2Component } from './flexbox2/flexbox2.component';
import { Flexbox3Component } from './flexbox3/flexbox3.component';
import { UtilidadesEnlacesColoreadosComponent } from './utilidades-enlaces-coloreados/utilidades-enlaces-coloreados.component';
import { UtilidadesRatiosComponent } from './utilidades-ratios/utilidades-ratios.component';
import { UtilidadesPositionComponent } from './utilidades-position/utilidades-position.component';
import { VisuallyHiddenComponent } from './visually-hidden/visually-hidden.component';
import { StrechedLinksComponent } from './streched-links/streched-links.component';
import { FondosComponent } from './fondos/fondos.component';
import { BordesComponent } from './bordes/bordes.component';
import { OverflowComponent } from './overflow/overflow.component';
import { SombrasComponent } from './sombras/sombras.component';
import { SizingComponent } from './sizing/sizing.component';
import { PracticasBootstrap5Module } from './practicas-bootstrap5/practicas-bootstrap5.module';

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
    PracticasBootstrap5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
