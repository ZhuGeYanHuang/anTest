import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductDetailService} from '../shared/product-detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  formModel: FormGroup;
  kind:string[];


  constructor(fb:FormBuilder,private productDetailService:ProductDetailService) {
    this.formModel=fb.group({
      productTitle:['',[Validators.minLength(4),Validators.maxLength(6)]],
      productPrice:['',this.priceNumLimit],
      productCategory:['-1']
    });
  }

  ngOnInit() {
    this.kind=this.productDetailService.getKinds();

  }

  /**
   * 价格判断
   * @param {FormControl} price
   */
  priceNumLimit(price: FormControl): any {
    if (!price.value) {
      return null;
    }
    let priceV = price.value;
    if (priceV > 0) {
      return null;
    } else {
      return {'price': true};
    }
  }

  onSubmit(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.productDetailService.searchEvent.emit(this.formModel.value);
    }
  }


}
