import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.less']
})
export class BottomComponent implements OnInit {
  @Input() yearIdx:number = 0;
  columns:any[] = [{title:"Идеальная технология экстракции кофе", text:"Кофемашина пропускает тонкую струю воды через капсулу под давлением 19&nbsp;бар."}, 
                    {title:"Яркий вкус", text:"В&nbsp;новейшей модели Nespresso Bork Creatista Plus есть 8&nbsp;опций кофейных рецептов и&nbsp;11&nbsp;режимов температуры молока."},
                    {title:"Простота в&nbsp;использовании", text:"Кофе остаётся в&nbsp;капсуле после использования, и&nbsp;поэтому кофемашину не&nbsp;нужно мыть. Благодаря быстрому разогреву кофемашина готова к&nbsp;использованию уже через 3&nbsp;секунды."}];
  columnsm:any[] = this.columns.reverse();

  constructor() { }

  ngOnInit() {
  }

}
