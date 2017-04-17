import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  slides:any[] = [{header:"Кофе как еда", subtitle:"В Эфиопии из сырых измельчённых кофейных ягод лепили съедобные шарики.<br><br><span>В одной кофейной ягоде обычно два зерна.</span>", description:"Абсолютное большинство кофеманов <span>(96%)</span> пьют кофе дома, половина из них <span>(54%)</span> продолжают пить кофе на работе, и лишь каждый пятый любитель просит чашку кофе в гостях.<br><br><span>3 миллиарда</span> чашек кофе выпивается в мире ежедневно.", image:"./assets/images/1.svg"},
                  {header:"Кофе по-турецки", subtitle:"На Востоке кофе варили в сосуде с толстыми стенками и широким дном.<br><br><span>В Османской империи женщина имела право развестись с мужем, если он не обеспечивал её кофе в достаточном количестве.</span>", description:"Любителей и ценителей кофе в России с каждым годом становится всё больше: в среднем число чашек растёт на <span>5%</span> год от года, а доля нат урального кофе по отношению к растворимому выросла на <span>12%</span> за последние <span>7 лет.</span><br><br>В среднем мужчины пьют больше кофе, чем женщины (<span>1,7</span> чашки в день против <span>1,5</span>).", image:"./assets/images/2.svg"},
                  {header:"Капельная кофеварка и перколятор", subtitle:"Архиепископ Жан-Батист де Беллуа придумал конструкцию, в которой вода проходила через фильтр с молотым кофе, а английский изобретатель граф Румфорд усовершенствовал её, добавив перфорированный пресс для фиксации кофейного слоя.<br><br><span>Перколяция — фильтрование жидкости через слой твёрдого вещества.</span>", description:"<span>4%</span> жителей России так сильно любят кофе, что пьют его даже ночью.", image:"./assets/images/3.svg"},
                  {header:"Гейзерная и вакуумная кофеварки", subtitle:"Француз Николя Дюран запатентовал кофейник с трубкой внутри. В ней кипящая вода превращалась в пар, который под давлением попадал в ёмкость с молотым кофе. Ещё через несколько лет кофе стали фильтровать и переливать под воздействием вакуума.<br><br><span>Гейзерные кофеварки популярны в Италии, там они называются «мока».</span>", description:"<span>57%</span> людей пьют кофе во время завтрака, <span>34%</span> в промежутках между едой и <span>13%</span> весь день.", image:"./assets/images/4.svg"},
                  {header:"Эспрессо-машина", subtitle:"На Миланской выставке был продемонстрирован кофейный аппарат, в котором давление создавала струя пара, а механизм сам отмерял порции за секунды. В 1938 году появились полуавтоматические кофемашины (так называемые рожковые), а через полвека этот процесс был полностью автоматизирован: кофемашина сама молола зёрна, варила и разливала кофе.", description:"Если вы любите кофе, то большая часть ваших единомышленников <span>(63%)</span> живёт в мегаполисах, старше <span>35 лет</span>, хорошо образована и имеет высокий доход.", image:"./assets/images/5.svg"},
                  {header:"Капсульные кофемашины", subtitle:"Инженер Эрик Фавр увёз из Италии секрет римского бариста, доработал его и запатентовал кофейную капсулу, которая прокалывается в процессе приготовления напитка. Сегодня эта технология доведена до совершенства: свежемолотый и свежеобжаренный кофе попадает в капсулу в вакуумной атмосфере — это один из этапов заботы о сохранении вкуса и аромата кофе, второй— алюминиевая капсула. На производстве она запечатывается, чтобы сохранить всю свежесть зерен до момента дегустации кофе. Именно это позволяет клиентам Nespresso наслаждаться идеальным напитком чашка за чашкой.", description:"Кофемашины Nespresso – любимый кофе одним касанием.", image:"./assets/images/6.svg"}];
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
      window.open("https://vk.com/away.php?to=https%3A%2F%2Fwww.nespresso.com%2Fru%2Fru%2Fcoffee-machines%2Fcreatista-plus-metal-stainless-steel&cc_key=", "_blank");
    }
  }
}
