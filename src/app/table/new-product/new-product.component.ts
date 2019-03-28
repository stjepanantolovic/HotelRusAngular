import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 @ViewChild('productNameInput') productNameInputRef: ElementRef;
 @ViewChild('priceInput') priceInputRef: ElementRef;

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  onAddProduct(){
    const prodName= this.productNameInputRef.nativeElement.value;
    const prodPrice= this.priceInputRef.nativeElement.value;
    const newProduct= new Product(prodName, prodPrice);
    this.productService.addProductToProducts(newProduct);
    this.onClearForm();
  }

  onClearForm(){
    this.productNameInputRef.nativeElement.value="";
    this.priceInputRef.nativeElement.value="";
  }

}
