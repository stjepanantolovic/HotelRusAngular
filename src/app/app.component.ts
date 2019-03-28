import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from './table/product.service';
import { Product } from './table/product.model';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  loadedFeature = 'products';
  
constructor(private productService: ProductService){  
}



ngOnInit(){   

}

onNavigate(feature: string) {
  this.loadedFeature = feature;
}

onPostProduct(newProduct:Product){
  this.productService.addProductToProducts(newProduct);
  
}
onDeleteProduct(id:number){
  this.productService.deleteProduct(id);
}

onPutProduct(id:number){
  
  
}
}
