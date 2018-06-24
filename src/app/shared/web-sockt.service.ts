import { Injectable } from '@angular/core';
import {stringDistance} from "codelyzer/util/utils";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {observable} from "rxjs/symbol/observable";
@Injectable()
export class WebSocktService {

  constructor() { }

  //声明 websocket属性
  ws:WebSocket;

  createWebSocket(url:string,id:number){
      this.ws = new WebSocket(url);

      return new Observable<string>(observable =>{
          this.ws.onmessage = (event) => observable.next(event.data);
          this.ws.onerror   = (event) => observable.error(event);
          this.ws.onclose   = (event) => observable.complete();
          this.ws.onopen    = (event) => this.sendMassge({productId:id});
          return ()=>this.ws.close();
      });

  }













  createObservableSocket(url : string, id:number) : Observable <any> {
    this.ws = new WebSocket(url);
    // 1.响应式编程  什么时候发送第一个元素  接送到消息的时候
    // 2.出现问题时 流需要抛一个异常
    // 3.什么时候发送流结束的信号 ，当关闭的时候发送结束信号
    return new Observable(observer => {
      this.ws.onmessage = (event) => observer.next(event.data);
      this.ws.onerror = (error) => observer.error(event);
      this.ws.onclose = (event) => observer.complete();
      //打开连接先发送一个消息
      this.ws.onopen = (event) => this.sendMessage({productId:id})
      return () => this.ws.close();
    }).map(message=>{
      debugger;
      console.log(message);
      JSON.parse(JSON.stringify(message))
    });
  }

  //发送消息
  sendMassge(msg:any){
      this.ws.send(JSON.stringify(msg));
  }


  sendMessage(msg : any){
    //发送的数据都是字符串
    this.ws.send(JSON.stringify(msg))
  }

}
