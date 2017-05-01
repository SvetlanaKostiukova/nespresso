import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  slides:any[] = [{header:"Кофе как еда", subtitle:"В&nbsp;Эфиопии из&nbsp;сырых измельчённых кофейных ягод лепили съедобные шарики.<br><br><span>В&nbsp;одной кофейной ягоде обычно два зерна.</span>", description:"Абсолютное большинство кофеманов <span>(96%)</span> пьют кофе дома, половина из&nbsp;них <span>(54%)</span> продолжают пить кофе на&nbsp;работе, и&nbsp;лишь каждый пятый любитель просит чашку кофе в&nbsp;гостях.<br><br><span>3&nbsp;миллиарда</span> чашек кофе выпивается в&nbsp;мире ежедневно.", descriptionmob:"Любителей и&nbsp;ценителей кофе в&nbsp;России с&nbsp;каждым годом становится всё больше: в&nbsp;среднем число чашек растёт на&nbsp;<span>5%</span> год от&nbsp;года, а&nbsp;доля нат урального кофе по&nbsp;отношению к&nbsp;растворимому выросла на&nbsp;<span>12%</span> за&nbsp;последние <span>7&nbsp;лет.</span> <br><br><span>3&nbsp;миллиарда</span> чашек кофе выпивается в&nbsp;мире ежедневно.", image:"./assets/images/1.svg"},
                  {header:"Кофе по-турецки", subtitle:"На&nbsp;Востоке кофе варили в&nbsp;сосуде с&nbsp;толстыми стенками и&nbsp;широким дном.<br><br><span>В&nbsp;Османской империи женщина имела право развестись с&nbsp;мужем, если он&nbsp;не&nbsp;обеспечивал её&nbsp;кофе в&nbsp;достаточном количестве.</span>", description:"Любителей и&nbsp;ценителей кофе в&nbsp;России с&nbsp;каждым годом становится всё больше: в&nbsp;среднем число чашек растёт на&nbsp;<span>5%</span> год от&nbsp;года, а&nbsp;доля нат урального кофе по&nbsp;отношению к&nbsp;растворимому выросла на&nbsp;<span>12%</span> за&nbsp;последние <span>7&nbsp;лет.</span> <br><br>В&nbsp;среднем мужчины пьют больше кофе, чем женщины (<span>1,7</span> чашки в&nbsp;день против <span>1,5</span>).", descriptionmob:"Абсолютное большинство кофеманов <span>(96%)</span> пьют кофе дома, половина из&nbsp;них <span>(54%)</span> продолжают пить кофе на&nbsp;работе, и&nbsp;лишь каждый пятый любитель просит чашку кофе в&nbsp;гостях.<br><br>В&nbsp;среднем мужчины пьют больше кофе, чем женщины (<span>1,7</span> чашки в&nbsp;день против <span>1,5</span>).", image:"./assets/images/2.svg"},
                  {header:"Капельная кофеварка и&nbsp;перколятор", subtitle:"Архиепископ Жан-Батист де&nbsp;Беллуа придумал конструкцию, в&nbsp;которой вода проходила через фильтр с&nbsp;молотым кофе, а&nbsp;английский изобретатель граф Румфорд усовершенствовал&nbsp;её, добавив перфорированный пресс для фиксации кофейного слоя.<br><br><span>Перколяция&nbsp;&mdash; фильтрование жидкости через слой твёрдого вещества.</span>", description:"<span>4%</span>&nbsp;жителей России так сильно любят кофе, что пьют его даже ночью.", descriptionmob:"<span>4%</span>&nbsp;жителей России так сильно любят кофе, что пьют его даже ночью.", image:"./assets/images/3.svg"},
                  {header:"Гейзерная и&nbsp;вакуумная кофеварки", subtitle:"Француз Николя Дюран запатентовал кофейник с&nbsp;трубкой внутри. В&nbsp;ней кипящая вода превращалась в&nbsp;пар, который под давлением попадал в&nbsp;ёмкость с&nbsp;молотым кофе. Ещё через несколько лет кофе стали фильтровать и&nbsp;переливать под воздействием вакуума.<br><br><span>Гейзерные кофеварки популярны в&nbsp;Италии, там они называются &laquo;мока&raquo;.</span>", description:"<span>57%</span> людей пьют кофе во&nbsp;время завтрака, <span>34%</span> в&nbsp;промежутках между едой и&nbsp;<span>13%</span> весь день.", descriptionmob:"<span>57%</span> людей пьют кофе во&nbsp;время завтрака, <span>34%</span> в&nbsp;промежутках между едой и&nbsp;<span>13%</span> весь день.", image:"./assets/images/4.svg"},
                  {header:"Эспрессо-машина", subtitle:"На&nbsp;Миланской выставке был продемонстрирован кофейный аппарат, в&nbsp;котором давление создавала струя пара, а&nbsp;механизм сам отмерял порции за&nbsp;секунды. В&nbsp;1938 году появились полуавтоматические кофемашины (так называемые рожковые), а&nbsp;через полвека этот процесс был полностью автоматизирован: кофемашина сама молола зёрна, варила и&nbsp;разливала кофе.", description:"Если вы&nbsp;любите кофе, то&nbsp;большая часть ваших единомышленников <span>(63%)</span> живёт в&nbsp;мегаполисах, старше <span>35&nbsp;лет</span>, хорошо образована и&nbsp;имеет высокий доход.", descriptionmob:"Главные любители кофе в&nbsp;мире голландцы: в&nbsp;среднем они выпивают по&nbsp;<span>2,4</span> чашки кофе в&nbsp;день.", image:"./assets/images/5.svg"},
                  {header:"Капсульные кофемашины", subtitle:"Инженер Эрик Фавр увёз из&nbsp;Италии секрет римского бариста, доработал его и&nbsp;запатентовал кофейную капсулу, которая прокалывается в&nbsp;процессе приготовления напитка. Сегодня эта технология доведена до&nbsp;совершенства: свежемолотый и&nbsp;свежеобжаренный кофе попадает в&nbsp;капсулу в&nbsp;вакуумной атмосфере&nbsp;&mdash; это один из&nbsp;этапов заботы о&nbsp;сохранении вкуса и&nbsp;аромата кофе, второй&mdash; алюминиевая капсула. На&nbsp;производстве она запечатывается, чтобы сохранить всю свежесть зерен до&nbsp;момента дегустации кофе. Именно это позволяет клиентам Nespresso наслаждаться идеальным напитком чашка за&nbsp;чашкой.<br><br><span>Кофемашины Nespresso&nbsp;&mdash; любимый кофе одним касанием.</span>", description:"", descriptionmob:"", image:"./assets/images/6.svg"}];
  @Input() yearIdx:number = 0;
  @Output() yearChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitize(img: string){
    var url = "url('" + img + "')";
    return this.sanitizer.bypassSecurityTrustUrl(img);
  }

  onSwitch(flag: boolean){
    var newYearIdx = flag? this.yearIdx+1: this.yearIdx-1;
    console.log(newYearIdx);
    if(newYearIdx >=0 && newYearIdx < this.slides.length)
      this.yearChanged.emit(newYearIdx);
  }

  openLink(item: any){
    var idx = this.slides.indexOf(item);
    if(idx == 5){
      window.open("https://www.nespresso.com/ru/ru/coffee-machines/creatista-plus-metal-stainless-steel", "_blank");
    }
  }
}
