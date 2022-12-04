import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioCesarComponent } from './portafolio-cesar/portafolio-cesar.component';



@NgModule({
  declarations: [
    PortafolioCesarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PortafolioCesarComponent
  ]
})
export class PortafolioModule { }
