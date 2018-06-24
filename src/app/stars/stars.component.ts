import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,DoCheck {



  // @Input() 属性的值由父类决定
  @Input()
  public rating: number = 1;

  @Output()
  public ratingChange:EventEmitter<number> =new EventEmitter();

  public starts: boolean[];

  @Input()
  public readonly:boolean = true;

  constructor() { }

  ngOnInit() {
  }


  ngDoCheck(): void {
    this.starts = [ ];
    for (let i = 1; i <= 5; i++) {
      this.starts.push(i > this.rating);

    }

  }

  changeStrat(index){
    if(!this.readonly){
      this.rating=index;
      this.ratingChange.emit(this.rating);
    }
  }

}
