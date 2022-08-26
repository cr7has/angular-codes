import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css'],
})
export class NgForDemoComponent {
  navBar = ['Home', 'Electronics', 'Footwear', 'Clothing'];
  navBarTwo = [
    {
      Category: 'Electronics',
      Products: ['JBL Speaker', 'Airpods', 'Earphone'],
    },
    {
      Category: 'Footwear',
      Products: ['Casuals', 'Formal', 'Boots', 'Slipper'],
    },
    {
      Category: 'Fashion',
      Products: ['Shirts', 'T-Shirts', 'Jeans', 'Pants'],
    },
  ];
  data = [
    {
      Name: 'JBL Speaker',
      Price: 4500.5,
      Photo: '../../../assets/speaker.jpg',
    },
    {
      Name: 'Nike Casuals',
      Price: 5000.5,
      Photo: '../../../assets/shoes.jpg',
    },
    {
      Name: 'Shirts',
      Price: 4500.5,
      Photo: '../../../assets/shirts.jpg',
    },
  ];
}
