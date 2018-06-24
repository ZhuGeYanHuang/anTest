import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Product, ProductDetailService} from '../shared/product-detail.service';
import {Comment, CommentService} from '../shared/comment.service';
import {log} from "util";
import {WebSocktService} from "../shared/web-sockt.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public productId: number;
  public comments: Comment[];
  public isComentHidden :boolean=true;
  public isAttention=true;
  public newPrice = 0 ;
  public newComment:string = '';
  public newRating:number = 5;
  subscription:Subscription;

  constructor(private routeInfo: ActivatedRoute,
               private productDetailService: ProductDetailService,
               private commentService: CommentService,
               private webSocktService:WebSocktService
              ) { }

  ngOnInit() {
    // 参数快照
    this.productId = this.routeInfo.snapshot.params['id'];
    console.log(this.productId);
    this.productDetailService.getproduct(this.productId).subscribe(
      e => {this.product = e
                  this.newPrice = e.price
      }
  );
    console.log(this.product);
    this.commentService.getComments(this.productId).subscribe(
      e => this.comments = e
    );
    console.log(this.comments);

  }

  addComment(){
      debugger;
      let comments=new Comment(this.productId, this.newComment, '赵六', this.newRating, '2017-10-16 10:47:55');
      this.comments.unshift(comments);
      let sum = this.comments.reduce( (sum,comemmt)=>sum+comemmt.start,0);
      this.product.rating=sum/this.comments.length;
      console.log(this.newRating);
      console.log("coment"+this.newComment);
      this.newComment="";
      this.newRating=5;
      this.isComentHidden=true;
  }

  takeAttention(){
      if(this.subscription){
        this.subscription.unsubscribe();
        this.isAttention  = true;
        this.subscription = null;
      }else{
        this.isAttention=false;
        this.subscription=this.webSocktService.createWebSocket("ws://localhost:8085",this.productId)
          .subscribe(
            productId =>{
              debugger
              this.newPrice=JSON.parse(productId)[0]["price"];
            }
          );
      }










    // if(this.subscription){
    //   this.subscription.unsubscribe();
    //   this.isAttention = true;
    //   this.subscription = null;
    // }else{
    //   this.isAttention = false;
    //   this.subscription=this.webSocktService.createWebSocket("ws://localhost:8085",this.productId)
    //     .subscribe(
    //       product =>{
    //         this.newPrice=JSON.parse(product)[0]["price"];
    //       }
    //     )
    // }
  }

}
