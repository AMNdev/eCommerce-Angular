import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-searchComponent',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css']
})
export class SearchComponentComponent implements OnInit {

  @Input()
  allProducts: Product[] = []


  constructor() { }

  ngOnInit() {
  }

}
