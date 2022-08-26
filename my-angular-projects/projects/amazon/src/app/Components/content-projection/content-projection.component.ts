import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent implements OnInit {
  // isVisible = true;
  // thenBlock: TemplateRef<any> | null = null;

  // @ViewChild('firstBlock', { static: true })
  // firstBlock: TemplateRef<any> | null = null;
  // @ViewChild('secondBlock', { static: true })
  // secondBlock: TemplateRef<any> | null = null;

  // toggleBlocks() {
  //   this.isVisible = this.isVisible == true ? false : true;
  // }

  isVisible = true;

  detailsBtn = 'Preview';
  thenBlock: TemplateRef<any> | null = null;
  @ViewChild('details', { static: true })
  details: TemplateRef<any> | null = null;
  @ViewChild('preview', { static: true })
  preview: TemplateRef<any> | null = null;

  constructor() {}

  ngOnInit(): void {
    // this.thenBlock = this.firstBlock;
    this.thenBlock = this.details;
  }
  Toggle() {
    this.detailsBtn = this.detailsBtn == 'Details' ? 'Preview' : 'Details';
    this.thenBlock =
      this.thenBlock == this.details ? this.preview : this.details;
  }
}
