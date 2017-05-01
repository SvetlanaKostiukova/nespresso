import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
  yearIdx:number = 0;

  onYearChanged(yearIdx: number){
    this.yearIdx = yearIdx;
  }
}
