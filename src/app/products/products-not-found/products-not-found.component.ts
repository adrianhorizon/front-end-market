import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-not-found',
  templateUrl: './products-not-found.component.html',
  styleUrls: ['./products-not-found.component.scss']
})
export class ProductsNotFoundComponent implements OnInit {

@Input("title") title: String;

@Input("description") description: String;
  constructor() { }

  ngOnInit() {
  }

}
