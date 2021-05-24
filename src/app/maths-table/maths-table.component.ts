import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maths-table',
  templateUrl: './maths-table.component.html',
  styleUrls: ['./maths-table.component.css'],
})
export class MathsTableComponent implements OnInit {
  a: number = 0;
  b: number = 0;
  tablehtml: string = '';
  resultClass = true;
  colorResutClass = true;
  layout_3x2 = false;
  showImages = true;
  images = [
    'https://lawctopus.com/clatalogue/wp-content/uploads/2020/08/783px-Test-Logo.svg.png',
    'https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-png-Image-for-Testing.png',
    'https://lawctopus.com/clatalogue/wp-content/uploads/2020/08/783px-Test-Logo.svg.png',
    'https://lawctopus.com/clatalogue/wp-content/uploads/2020/08/783px-Test-Logo.svg.png',
    'https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-png-Image-for-Testing.png',
    'https://lumina.com/wp-content/plugins/webp-express/test/test.png',
  ];
  users = [
    { id: 1, firstname: 'jooh', lastname: 'doe', email: 'joohdoe@gmail.com' },
    { id: 2, firstname: 'jooh', lastname: 'doe', email: 'joohdoe@gmail.com' },
    { id: 3, firstname: 'jooh', lastname: 'doe', email: 'joohdoe@gmail.com' },
  ];
  tableresult: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.a = 1;
    this.b = 10;
    this.generateTable();
  }

  generateTable(): void {
    this.tablehtml = '';
    this.tableresult = [];
    for (let i = 1; i <= this.b; i++) {
      this.tablehtml += `<li>${this.a} X ${i} = ${this.a * i}</li>`;
      this.tableresult.push(`${this.a * i}`);
    }
  }
  changeClass() {
    this.resultClass = !this.resultClass;
    this.colorResutClass = !this.colorResutClass;
  }
  changeLayout(v: any) {
    this.layout_3x2 = v == '3x2' ? true : false;
  }
}
