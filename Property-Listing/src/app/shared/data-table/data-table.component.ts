import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  ELEMENT_DATA: any;
  dataSource: any;
  displayedColumns: any;

  constructor() {
    this.ELEMENT_DATA = [
      {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {name: 'Helium', weight: 4.0026, symbol: 'He'},
      {name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {name: 'Boron', weight: 10.811, symbol: 'B'},
      {name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    this.dataSource = this.ELEMENT_DATA;
    this.displayedColumns = ['name', 'weight', 'symbol'];

   }

  ngOnInit(): void {
  }

}
