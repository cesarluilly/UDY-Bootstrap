import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomosComponent } from './AtomicDesign/atomos/atomos.component';
import { MoleculasComponent } from './AtomicDesign/moleculas/moleculas.component';
import { ProtonesComponent } from './AtomicDesign/protones/protones.component';
import { OrganismosComponent } from './AtomicDesign/organismos/organismos.component';
import { TemplatesComponent } from './AtomicDesign/templates/templates.component';
import { ReportComponent } from './pages/report/report.component';



@NgModule({
  declarations: [
    ProtonesComponent,
    AtomosComponent,
    MoleculasComponent,
    OrganismosComponent,
    TemplatesComponent,
    ReportComponent
  ],
  exports: [
    ProtonesComponent,
    AtomosComponent,
    MoleculasComponent,
    OrganismosComponent,
    TemplatesComponent,
    ReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Odyssey2Module { }
