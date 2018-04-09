import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data = [150, 999, 200, 400, 500];
  data = [{"categoryName": "electronics", "attributeCount":150},
  {"categoryName": "elect123", "attributeCount":999},
  {"categoryName": "elect123", "attributeCount":200}, 
  {"categoryName": "elect123", "attributeCount":400}, 
  {"categoryName": "elect123", "attributeCount":600}, 
  {"categoryName": "elect123", "attributeCount":99}, 
  {"categoryName": "elect123", "attributeCount":650}, 
  {"categoryName": "elect12", "attributeCount":850},
  {"categoryName": "elect123", "attributeCount":370}, 
  {"categoryName": "elect123", "attributeCount":770}, 
  {"categoryName": "elect12", "attributeCount":100}, 
  {"categoryName": "elect123", "attributeCount":250},
  {"categoryName": "elect123", "attributeCount":350},
  {"categoryName": "elect123", "attributeCount":450},
  {"categoryName": "elect123", "attributeCount":1050}, 
  {"categoryName": "elect123", "attributeCount":550}, 
  {"categoryName": "elect12", "attributeCount":950}, 
  {"categoryName": "elect12", "attributeCount":810}, 
  {"categoryName": "elect123", "attributeCount":910}, 
  {"categoryName": "elect123", "attributeCount":700}, 
  {"categoryName": "elect123", "attributeCount":90} ];
  customData = [];count = 0;width;customValue;divs;heig = 100;color = 0;counter = 0;length; final = []; arr;
  counterValue;
  constructor(private cdr: ChangeDetectorRef) {
    this.data = this.data.sort((a ,b) => {
      if(a['attributeCount']<b['attributeCount']) {
        return 1;
      } else if(a['attributeCount']>b['attributeCount']) {
        return -1;
      } else if(a['attributeCount']==b['attributeCount']) {
        return 0;
      }
    });
    this.length = this.data.length;
    this.normalizeData();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  normalizeData() {
    let i = 0;
    for(let a of this.data) {
      let val = a['attributeCount']/1000;
      this.customData.push(a);
      this.length = this.length - i;
      if(this.length > 0) {
        i++;
      }
    }
    this.count = i;
    this.width = 100/this.count;
    this.customValue = new Array(this.count);
  }

  getHeight(index) {
    // console.log('height::' + index);
    let height = 100 / index;
    return height + '%';
  }

  getDivs(a) {
    this.counterValue = a;
    a = a + 1;
    if(this.color<this.data.length) {
      let divs = [];
      while(a>=1 && this.color<this.data.length) {
        divs.push({data:this.data[this.color], value: this.color});
        // divs.push(this.data[this.color]);
        this.color ++;
        a--;
      }
      this.final.push(divs);
      // console.log('test');
      // console.log('divs::' + JSON.stringify(this.final));
      // this.arr = divs;
      // console.log('arr::' + JSON.stringify(this.arr) + this.arr.length);
      // return arr;
    }
  }
}
