import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columns: string[] = ["col1", "col2", "col3", "col4"]
  rows: string[][] = [
    ["11", "12", "13", "14"],
    ["21", "22", "23", "24"],
    ["31", "32", "33", "34"],
    ["41", "42", "43", "44"]
  ]
}
