import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css'],
})
export class ForDemoComponent implements OnInit {
  people = [
    { name: 'alex ', age: '44', salary: '2543' },
    { name: 'brad', age: '34', salary: '1233' },
    { name: 'Meclod', age: '67', salary: '7832' },
    { name: 'Dekins', age: '59', salary: '6732' },
    { name: 'Fluin', age: '37', salary: '3453' },
  ];
  constructor() {}
  ngOnInit() {}
}
