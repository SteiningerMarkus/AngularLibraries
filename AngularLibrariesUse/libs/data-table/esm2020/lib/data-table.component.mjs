import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DataTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXRhLXRhYmxlL3NyYy9saWIvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7OztBQXdCdkQsTUFBTSxPQUFPLGtCQUFrQjtJQVE3QjtRQVBTLFlBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsU0FBSSxHQUFZO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDbEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUNsQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQ25CLENBQUM7SUFFYyxDQUFDO0lBRWpCLFFBQVE7SUFFUixDQUFDOzsrR0FaVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixzR0FwQm5COzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDsyRkFHVSxrQkFBa0I7a0JBdEI5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7MEVBRVUsT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXlsaWItZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRhYmxlPlxuICAgICAgPHRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAge3tjb2x1bW59fVxuICAgICAgICA8L3RoPlxuICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzXCI+XG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnM7IGluZGV4IGFzIGlcIj5cbiAgICAgICAgICB7e3Jvd1tpXX19XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IHN0cmluZ1tdID0gW1wiY29sMVwiLCBcImNvbDJcIiwgXCJjb2wzXCJdO1xuICBASW5wdXQoKSByb3dzOiBhbnlbXVtdID0gW1xuICAgIFtcIjExXCIsIFwiMTJcIiwgXCIxM1wiXSxcbiAgICBbXCIyMVwiLCBcIjIyXCIsIFwiMjNcIl0sXG4gICAgW1wiMzFcIiwgXCIzMlwiLCBcIjMzXCJdXG4gIF07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG59XG4iXX0=