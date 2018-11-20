import { Component } from "@angular/core";
import { ProductListComponent } from './products/product-list.component'
import { ProductService } from "./products/product.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pm-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ProductService]
})
export class AppComponent {


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}