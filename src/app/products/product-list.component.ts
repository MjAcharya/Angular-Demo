import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"
import { ProductService } from "./product.service";
@Component({
    selector: 'pm-product',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    ngOnInit(): void {
        this.products=this._productService.getProduct();
    }
    productTitle: string = "Product List!!";
    imageWidth: number = 120;
    imageMargin: number = 2;
    listFilter: string;
    setButton: boolean = false;
    products: IProduct[];

    constructor(private _productService:ProductService){
    }

    buttonToggle(): void {
        this.setButton = !this.setButton;
    }

    onClicked(e: string): void {
        this.productTitle = e;
    }
}