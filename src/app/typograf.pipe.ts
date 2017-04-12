import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typograf'
})
export class TypografPipe implements PipeTransform {
  POST_EXCUSES = ["их", "её", "бы", "мы", "она", "они", "оно", "я", "что", "все", "без", "безо", "близ", "в", "во", "вместо", "вне", "для", "до", "за", "из", "изо", "из-за", "из-под", "к", "ко", "кроме", "между", "меж", "на", "над", "надо", "о", "об", "обо", "от", "ото", "перед", "передо", "пред", "предо", "по", "под", "подо", "при", "про", "ради", "с", "со", "сквозь", "среди", "у", "через", "чрез", "так", "и", "да", "не", "но", "также", "тоже", "ни", "зато", "однако", "же", "или", "либо", "то", "ли", "а", "я", "он"];
  PREV_EXCUSES = ["века", "в.", "год", "г.", "года"];

  transform(value: any, args?: any): any {
    if(!value) return value;

    let words: string[] = value.replace(/ +(?= )/g, '').replace(/></g, "> <").split(" ");
    var text = "";
    for (let i: number = 0; i < words.length; i++) {
        let word: string = words[i];
        word == word.replace(/[,;:!?()"]/g, '').replace(/<.*?>/gi, '').toLowerCase();
        let space = "";

        let found: boolean = false;
        for (let post of this.POST_EXCUSES) {
            if (word.toLowerCase() == post.toLowerCase()) {
                text += word;
                space = "\u00A0";
                found = true;
                break;
            }
        }
        if (!found) {
            for (let prev of this.PREV_EXCUSES) {
                if (word.toLowerCase() == prev.toLowerCase()) {
                    text = text.substr(0, text.length - 1) + "\u00A0" + word;
                    space = " ";
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            text += word;
            space = " ";
        }
        if (i < (words.length - 1)) {
            text += space;
        }
    }
    
    return text;
  }
}
