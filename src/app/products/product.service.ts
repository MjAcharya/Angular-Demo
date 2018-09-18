import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "./product";

@Injectable()
export class ProductService {
    private _productUrl = 'src/app/products/product1.json';
    productDetails: IProduct;
    constructor(private _http: HttpClient) {
    }
    getProduct(): Observable<any> {
         return this._http.get(this._productUrl);  
    }
}