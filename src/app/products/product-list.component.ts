import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"
import { ProductService } from "./product.service";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { TranslateService } from "@ngx-translate/core";
@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productTitle: string;
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

        this.translate.get('productTitle').subscribe(res => {
            this.productTitle = res;
        })
    }

    constructor(private _productService: ProductService, private translate: TranslateService) {
        translate.setDefaultLang('en');
    }

    buttonToggle(): void {
        this.setButton = !this.setButton;
    }

    onClicked(e: string): void {
        this.productTitle = e;
    }
}