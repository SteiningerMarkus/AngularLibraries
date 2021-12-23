import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
