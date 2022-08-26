import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css'],
})
export class SwitchdemoComponent implements OnInit {
  product = {
    Name: 'Nike Casuals',
    Price: 6000.44,
    InStock: true,
    Photo: '../../../assets/shoes.jpg',
    Description: 'Nike casuals are best in the world.',
  };
  selectedView: String | null = 'Details';
  //this one is industry standard but here it is not working and don't know why
  //view = 'Details';
  // handleBtnUsingEvents(e) {
  //   this.view = e.target.name;
  // }
  views = ['Details', 'Preview', 'Description'];

  handleBtnClick(str: String) {
    this.selectedView = str;
  }
  count = 0;
  handleNextClick() {
    this.count++;
    this.selectedView = this.views[this.count];
  }
  handlePrevClick() {
    this.count--;
    this.selectedView = this.views[this.count];
  }
  constructor() {}
  ngOnInit(): void {}
}
