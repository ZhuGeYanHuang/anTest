import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  constructor() {
    Observable.from([1,2,3,4])
      .filter( e => e%2==0)
      .map(e => e*e)
      .subscribe(

      )
  }

  ngOnInit() {
  }

}
