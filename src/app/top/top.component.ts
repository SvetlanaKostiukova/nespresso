import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {
  yearIdx: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onYearChanged(yearIdx: number){
    this.yearIdx = yearIdx;
  }
}
