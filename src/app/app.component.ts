import { Component } from '@angular/core';
import {environment} from "../environments/environment";
 // --所有组件，都需要 装饰器-/
@Component({
  // --选择器 可以通过 app-root 标签 调用本组件
  selector: 'app-root',
  // 指定模板 必备
  templateUrl: './app.component.html',
  // 指向样式
  styleUrls: ['./app.component.css']
})
// 告诉ng 这是一个组件
export class AppComponent {// 定义控制器
  title = 'app';

  constructor(){
    console.log("微信号是："+environment.QQ);
  }
}
