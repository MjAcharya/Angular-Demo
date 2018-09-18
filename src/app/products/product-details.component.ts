import { IProduct } from "./product";
import { Component } from "@angular/core";

@Component({
    templateUrl:'product-details.component.html'
})
export class ProductDetailsComponent{
    product: IProduct;
    productTitle: string = 'Hello world!!!';
}