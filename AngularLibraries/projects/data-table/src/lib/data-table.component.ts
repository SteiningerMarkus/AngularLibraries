import {Component, Input, OnInit} from '@angular/core';

@Component({
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
})
export class DataTableComponent implements OnInit {
  @Input() columns: string[] = ["col1", "col2", "col3"];
  @Input() rows: string[][] = [
    ["11", "12", "13"],
    ["21", "22", "23"],
    ["31", "32", "33"]
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
