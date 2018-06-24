import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailService} from './shared/product-detail.service';
import {CommentService} from './shared/comment.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductFileterPipe } from './pipe/product-fileter.pipe';
import {HttpModule} from "@angular/http";
import { ObservableTestComponent } from './observable-test/observable-test.component';
import {WebSocktService} from "./shared/web-sockt.service";
import {HashLocationStrategy, LocationChangeListener, LocationStrategy} from "@angular/common";

const  routeConfig: Routes = [
  {path: '', component: HomeComponent },
  {path: 'product/:id', component: ProductDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductFileterPipe,
    ObservableTestComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [ProductDetailService , CommentService ,WebSocktService,{
    provide:LocationStrategy,useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
