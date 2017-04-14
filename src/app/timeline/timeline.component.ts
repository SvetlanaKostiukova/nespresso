import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit{
  @Output() yearChanged: EventEmitter<number> = new EventEmitter<number>();
  selectedYear:string = "800 г.";
  shifts:string[] = ["0", "108", "216", "290", "390", "540"];
  years:string[] = ["800 г.", "1545–1550 гг.", "1800 г.", "1827 г.", "1906–1985 гг.", "1986–2017 гг."];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.buildTimeline();
  }

  buildTimeline(){
    this.shifts = [];
    // var yearStart = +(this.years[1].split(" ")[0]).split('–')[1];
    // var yearEnd = +(this.years[5].split(" ")[0]).split('–')[1];
    // var n = yearEnd - yearStart;
    // for(var i = 0; i < this.years.length; i++){
    //   var curYear = 0;
    //   var firstSplit = this.years[i].split(" ")[0];
    //   var secondSplit = firstSplit.split('–')[0];
    //   // if(secondSplit.length == 2){
    //   //   curYear = (+secondSplit[0]) + ((+secondSplit[1]) - (+secondSplit[0]))/2;
    //   // } else 
    //   curYear = +secondSplit;
    //   var shift = (curYear - yearStart)*100/n;
    //   this.shifts.push(shift);
    // }
    // console.log(this.shifts);
  }

  getLeft(y:string){
    var idx = this.years.indexOf(y);
    return this.sanitizer.bypassSecurityTrustStyle(idx > -1 ? this.shifts[idx]: '');
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
