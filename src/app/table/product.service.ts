import { Product } from './product.model';
import { EventEmitter } from '@angular/core';

export class ProductService {
    productsChanged = new EventEmitter<Product[]>();
    productSelected = new EventEmitter<Product>();
    formChanged= new EventEmitter<boolean>();
    private products: Product[]=[
        new Product('Coca Cola', 15),
        new Product('Sprite', 15),
        new Product('Juha', 15),
        new Product('Salata', 12),
        new Product('Becki', 30)
    ];
    loadedForm:boolean;
    selectedProduct:Product;

    visibilityForm()
    {
       this.formChanged.emit(!this.loadedForm);
    }
getProducts(){
    return this.products.slice();
}
addProductToProducts(product:Product){
    this.products.push(product);
    this.productsChanged.emit(this.products.slice());
}
editProduct(id: number){
this.visibilityForm();
this.selectedProduct=this.products[id];
this.productSelected.emit(this.selectedProduct);
}

deleteProduct(id:number){
    this.products.splice(id,1);
    this.productsChanged.emit(this.products.slice());
}

}