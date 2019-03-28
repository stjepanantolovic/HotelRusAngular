import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../table/product.model';
import { ProductService } from '../table/product.service';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() postProduct=new EventEmitter<{
    name:string,
    price:number
  }>();
  selectedProduct:Product;
  
  newProductName="";
  newProductPrice:number;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.selectedProduct=this.productService.selectedProduct;
    this.productService.productSelected.subscribe(
      (selectedProduct:Product)=>{
        this.selectedProduct=selectedProduct;
      }
    )
    this.newProductName=this.selectedProduct.name;
    this.newProductPrice=this.selectedProduct.price;
  }

  onPostProduct(){
    this.postProduct.emit({
      name:this.newProductName,
      price:this.newProductPrice
    });
  }
}
