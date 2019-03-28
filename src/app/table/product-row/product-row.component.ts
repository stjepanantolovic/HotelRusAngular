import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: '[my-tr]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
@Input() product:Product;
@Input() id:number;

constructor(private productService: ProductService) {}


  ngOnInit() {
  }

  onDeleteProduct(id:number){
    this.productService.deleteProduct(id);
  }
  
  onEditProduct(id:number){
    this.productService.editProduct(id);
  }
}
