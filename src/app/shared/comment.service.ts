import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'

@Injectable()
export class CommentService {

  constructor(private http:Http) { }

  getComments(commentId: number): Observable<Comment []> {

    return this.http.get('/api/product/'+commentId+'/comments').map( res=> res.json());
   }

}

export class Comment {
  constructor(
    public comentId: number,
    public content: string,
    public persion: string,
    public start: number,
    public Time: string
  ) { }
}




