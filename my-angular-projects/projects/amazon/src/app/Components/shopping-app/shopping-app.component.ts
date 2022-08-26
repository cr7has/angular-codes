import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-app',
  templateUrl: './shopping-app.component.html',
  styleUrls: ['./shopping-app.component.css'],
})
export class ShoppingAppComponent implements OnInit {
  categories = ['Select Category', 'Fashion', 'Shoes', 'Electronics'];
  electronics = [
    'Select Electronics Prodduct',
    'Speaker',
    'Airpod',
    'Earphone',
  ];
  shoes = ['Select Shoes Type', 'Casual', 'Formal', 'Boots'];
  fashion = ['Select Dress Type', 'Shirt', 'T-Shirt', 'Jeans'];
  products: string[] = [];
  preview: string[] = [];
  selectedcategory = '';
  selectedproduct = '';

  onCategoryChange() {
    switch (this.selectedcategory) {
      case 'Electronics':
        this.products = this.electronics;
        break;
      case 'Fashion':
        this.products = this.fashion;
        break;
      case 'Shoes':
        this.products = this.shoes;
        break;
      default:
        this.products = [];
        break;
    }
  }
  onProductChange() {
    switch (this.selectedproduct) {
      case 'Shirt':
        this.preview = this.data.shirt;
        break;
      case 'Pant':
        this.preview = this.data.pant;
        break;
      case 'Jeans':
        this.preview = this.data.jeans;
        break;
      case 'T-Shirt':
        this.preview = this.data.tshirt;
        break;
      default:
        this.preview = [];
        break;
    }
  }
  data = [
    {
      Name: 'JBL SPEAKER',
      Price: 4500.44,
      Photo: '../../../assets/speaker.jpg',
    },
    {
      Name: 'Pepe Shirt',
      Price: 900.99,
      Photo: '../../../assets/shirts.jpg',
    },
    {
      Name: 'NIKE SHOES',
      Price: 3599.99,
      Photo: '../../../assets/shoes.jpg',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
