import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"
import { ProductService } from "./product.service";
import { errorHandler } from "@angular/platform-browser/src/browser";
@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productTitle: string = "Product List!!";
    imageWidth: number = 120;
    imageMargin: number = 2;
    listFilter: string;
    setButton: boolean = false;
    products: IProduct[];

    ngOnInit(): void {
        this._productService.getProduct().subscribe(res => {
            this.products = res;
        },
            err => {
                console.log(err);
            },
        );
    }

    constructor(private _productService: ProductService) {
    }

    buttonToggle(): void {
        this.setButton = !this.setButton;
    }

    onClicked(e: string): void {
        this.productTitle = e;
    }
}