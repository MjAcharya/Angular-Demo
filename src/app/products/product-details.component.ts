import { IProduct } from "./product";
import { Component, OnInit, AfterContentInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { ProductService } from "./product.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    products: IProduct[];
    product: IProduct;
    id: number;
    pageTitle: string;

    ngOnInit(): void {

        let othis = this;
        othis.id = +othis._route.snapshot.params['id'];
        othis.translate.get('ProductTitleNo').subscribe(res => {
            othis.pageTitle = res + ': ' + othis.id;
        })

        othis.productList.getProduct().subscribe(res => {
            othis.products = res;
            for (let pro of othis.products) {
                if (pro.productId === othis.id) {
                    othis.product = pro;
                }
            }
        });
        this.list();
    }




    list(): void {

        if (this.products)
            console.log(this.products)
        else
            setTimeout(() => {
                this.list();
            }, 1000);
    }

    constructor(private _route: ActivatedRoute,
        private _router: Router, private productList: ProductService, private translate: TranslateService) {
        translate.setDefaultLang('en');
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}