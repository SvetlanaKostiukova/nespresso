import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.less']
})
export class BottomComponent implements OnInit {
  columns:any[] = [{title:"Идеальная технология экстракции кофе", text:"Кофемашина пропускает тонкую струю воды через капсулу под давлением 19 бар."}, 
                    {title:"Яркий вкус", text:"В новейшей модели Nespresso Bork Creatista Plus есть 8 опций кофейных рецептов и 11 режимов температуры молока."},
                    {title:"Простота в использовании", text:"Кофе остаётся в капсуле после использования, и поэтому кофемашину не нужно мыть. Благодаря быстрому разогреву кофемашина готова к использованию уже через 3 секунды."}];

  constructor() { }

  ngOnInit() {
  }

}
