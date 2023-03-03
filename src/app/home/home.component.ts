import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("jumbotron", {static:false}) private jumbotron: ElementRef<HTMLDivElement>;
  isJumboTronInView: boolean = true;
  @ViewChild("row", {static:false}) private row: ElementRef<HTMLDivElement>;
  isRowInView: boolean = true;
  @ViewChild("image1", {static:false}) private image1: ElementRef<HTMLDivElement>;
  isImage1InView: boolean = false;
  @ViewChild("image2", {static:false}) private image2: ElementRef<HTMLDivElement>;
  isImage2InView: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) isScrolledIntoView() {
    if (this.jumbotron) {
      const rect = this.jumbotron.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      console.log(rect.top)
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.isJumboTronInView = topShown && bottomShown;
    }
    if (this.row) {
      const rect = this.row.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -50;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.isRowInView = topShown && bottomShown;
    }
    if (this.image1) {
      const rect = this.image1.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -100;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.isImage1InView = topShown && bottomShown;
    }
    if (this.image2) {
      const rect = this.image2.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -100;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.isImage2InView = topShown && bottomShown;
    }
  }
}
