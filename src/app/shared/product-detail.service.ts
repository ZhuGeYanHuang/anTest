import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http'
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductDetailService {

  searchEvent:EventEmitter<ProductSearch> = new EventEmitter();
  constructor(private http:Http) { }
  getProducts():Observable<Product[]> {
    return this.http.get('/api/product').map(res => res.json());
  }
  getproduct( productId: number ): Observable<Product> {
      return this.http.get('/api/product/'+productId).map(res => res.json());
  }

  getKinds(): string[] {
    return ['指数基金','大盘基金基金','高风险高回报基金','稳定基金','概念基金'];
  }

  seach( searchProduct:ProductSearch ): Observable<Product[]> {
    return this.http.get('/api/product',{search: this.encodeParam(searchProduct)}).map(res => res.json());
  }

  private encodeParam(searchProduct:ProductSearch){
    return Object.keys(searchProduct)
      .filter(key => searchProduct[key])
      .reduce((sum:URLSearchParams,key:string) => {
        sum.append(key,searchProduct[key]);
        return sum;
      },new URLSearchParams());

  }
}


export class ProductSearch {
  constructor(
    public title: string,
    public price: number,
    public cate: string
  ) {}
}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categoraies: Array<string>
  ) {}
}
