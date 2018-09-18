import { IProduct } from "./product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";

@Component({
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += ': ' + id;
    }
    product: IProduct;
    pageTitle: string = 'Product Detail';

    constructor(private _route: ActivatedRoute,
        private _router: Router) {

    }

    onBack(): void{
        this._router.navigate(['/products']);
    }
}