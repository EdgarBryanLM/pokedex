import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,
    ButtonModule,
    SidebarModule
  ],
  exports: [
    DropdownModule,
    ButtonModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
