import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit, OnChanges {
  yearIdx: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(c){
    console.log(c);
  }
  
  onYearChanged(yearIdx: number){
    this.yearIdx = yearIdx;
  }
}
