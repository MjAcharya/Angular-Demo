import { Component } from "@angular/core";
import { ProductListComponent } from './products/product-list.component'
import { ProductService } from "./products/product.service";

@Component({
selector:'pm-app',
  templateUrl: 'app.component.html',
styleUrls:['app.component.css'],
providers:[ProductService]
})
export class AppComponent{
  pageTitle:string ='Hello world!!!!';
}