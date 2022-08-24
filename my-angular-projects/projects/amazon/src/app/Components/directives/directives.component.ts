import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  product = {
    Name: 'Nike Casuals',
    Price: 4000.0,
    Photo: 'assets/shoes.jpg',
  };
  showImage = false;
  btnText = 'Show ';
  ToggleImage() {
    this.showImage = this.showImage == false ? true : false;
    this.btnText = this.btnText == 'Show ' ? 'Hide ' : 'Show ';
  }
}
