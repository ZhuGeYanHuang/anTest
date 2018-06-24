import { Component, OnInit } from '@angular/core';
import {Product, ProductDetailService} from '../shared/product-detail.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public  imgUrl= 'http://placehold.it/320x150';
  private product: Observable<Product []>;
  // public keyWorld:string;
  // public filterTitle:FormControl= new FormControl();

  constructor(private productDetailService: ProductDetailService) {
        // this.filterTitle.valueChanges
        //   .debounceTime(500)
        //   .subscribe(
        //     value=>this.keyWorld=value
        //   );

  }

  ngOnInit() {
        this.product = this.productDetailService.getProducts();
        console.log(this.product);
        // this.products ;
       // this.product.push(new Product (7 , '幻世区域连7', 60, 4.5, '股票指数基金', ['概念基金']));
        this.productDetailService.searchEvent.subscribe(
           param => this.product=this.productDetailService.seach(param)
        );
  }
}









