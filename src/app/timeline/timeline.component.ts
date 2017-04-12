import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  years:string[] = ["800 г.", "1545–1550 гг.", "1800 г.", "1827 г.", "1906–1985 гг.", "1986–2017 гг."];

  constructor() { }

  ngOnInit() {
  }

}
