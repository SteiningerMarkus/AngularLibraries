import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class DataTableComponent {
    constructor() {
        this.columns = ["col1", "col2", "col3"];
        this.rows = [
            ["11", "12", "13"],
            ["21", "22", "23"],
            ["31", "32", "33"]
        ];
    }
    ngOnInit() {
    }
}
DataTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DataTableComponent, selector: "mylib-data-table", inputs: { columns: "columns", rows: "rows" }, ngImport: i0, template: `
    <table>
      <thead>
      <tr>
        <th *ngFor="let column of columns">
          {{column}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let row of rows">
        <td *ngFor="let column of columns; index as i">
          {{row[i]}}
        </td>
      </tr>
      </tbody>
    </table>
  `, isInline: true, directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataTableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'mylib-data-table',
                    template: `
    <table>
      <thead>
      <tr>
        <th *ngFor="let column of columns">
          {{column}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let row of rows">
        <td *ngFor="let column of columns; index as i">
          {{row[i]}}
        </td>
      </tr>
      </tbody>
    </table>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { columns: [{
                type: Input
            }], rows: [{
                type: Input
            }] } });

class DataTableModule {
}
DataTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataTableModule, declarations: [DataTableComponent], imports: [BrowserModule], exports: [DataTableComponent] });
DataTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataTableModule, imports: [[
            BrowserModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DataTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DataTableComponent
                    ],
                    imports: [
                        BrowserModule
                    ],
                    exports: [
                        DataTableComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of data-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DataTableComponent, DataTableModule };
//# sourceMappingURL=data-table.mjs.map
