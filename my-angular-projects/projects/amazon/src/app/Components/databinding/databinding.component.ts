import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  product = {
    Name: 'Samsung TV',
    Price: 45000.45,
    InStock: true,
  };
  disableButton = false;
}
