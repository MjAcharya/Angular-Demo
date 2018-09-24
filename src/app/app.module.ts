import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipes } from './products/product.filter.pipes';
import { StarComponent } from './shared/star.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import { RouterModule } from '@angular/router'
import { WelcomeComponent } from './Home/welcome.component';
import { ProductDetailGaurd } from './products/product-guard.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader( http ,'./assets/i18n/','.json')
}
@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductFilterPipes, StarComponent, ProductDetailsComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ProductDetailGaurd], component: ProductDetailsComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: WelcomeComponent }
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ProductDetailGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
