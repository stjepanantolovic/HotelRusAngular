import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProductRowComponent } from './product-row/product-row.component';
import { Product } from './product.model';
import { ProductService } from './product.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 products:Product[];
 loadedForm:boolean;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.loadedForm=this.productService.loadedForm;
this.productService.formChanged.subscribe(
  (loadedForm:boolean) => {
    this.loadedForm=loadedForm;
  });
    this.products=this.productService.getProducts();
    this.productService.productsChanged.subscribe(
      (products:Product[]) => {
        this.products=products;
      }
    )
  }  
}
