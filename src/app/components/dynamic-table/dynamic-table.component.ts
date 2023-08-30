import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  rows: number | null = null;
  columns: number | null = null;
  errorMessage: string | null = null;
  tableData: string[][] | null = null;
  dirtyFields = {
    rows: false,
    columns: false
  };
}
