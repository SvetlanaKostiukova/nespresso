import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit, OnChanges{
  @Input() yearIdx: number = 0;
  @Output() yearChanged: EventEmitter<number> = new EventEmitter<number>();
  selectedYear:string = "800 г.";
  years:string[] = ["800 г.", "1545–1550 гг.", "1800 г.", "1827 г.", "1906–1985 гг.", "1986–2017 гг."];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectedYear = this.years[this.yearIdx];
  }

  ngOnChanges(c){
    console.log(c)
    this.selectedYear = this.years[this.yearIdx];
  }

  onSelect(year:string){
    var idx = this.years.indexOf(year);
    if(idx > -1){
      this.selectedYear = year;
      this.yearChanged.emit(idx);
    }
  }

  onSwitch(flag: boolean){
    var idx = this.years.indexOf(this.selectedYear);
    if(idx > -1){
      idx += flag? 1: -1;
      this.selectedYear = this.years[idx];
      this.yearChanged.emit(idx);
    }
  }
}
