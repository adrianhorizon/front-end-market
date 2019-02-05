import { Component, OnInit, Input } from '@angular/core';
import { productInterface } from 'src/app/shared/interface/productInterface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent extends productInterface implements OnInit {
  brands = [ 5,4,3,2,1];
  selectedStars: 6;
  selectedBoolean: true;

  stars = [
    { id: 5, value:1, icon: 'star star star star star', checked:false },
    { id: 4, value:2, icon: 'star star star star', checked:false },
    { id: 3, value:3, icon: 'star star star', checked:false },
    { id: 2, value:4, icon: 'star star', checked:false },
    { id: 1, value:5, icon: 'star', checked:false }
  ];

  ngOnInit() {
    this.GetProducts();
  }

}
