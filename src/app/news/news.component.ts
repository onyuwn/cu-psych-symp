import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild("update1", {static:false}) private update1: ElementRef<HTMLDivElement>;
  update1InView: boolean = true;
  @ViewChild("update2", {static:false}) private update2: ElementRef<HTMLDivElement>;
  update2InView: boolean = true;
  @ViewChild("update3", {static:false}) private update3: ElementRef<HTMLDivElement>;
  update3InView: boolean = false;
  @ViewChild("update4", {static:false}) private update4: ElementRef<HTMLDivElement>;
  update4InView: boolean = false;
  @ViewChild("update5", {static:false}) private update5: ElementRef<HTMLDivElement>;
  update5InView: boolean = false;
  @ViewChild("update6", {static:false}) private update6: ElementRef<HTMLDivElement>;
  update6InView: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) isScrolledIntoView() {
    if (this.update1) {
      const rect = this.update1.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      console.log(rect.top)
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.update1InView = topShown && bottomShown;
    }
    
    if (this.update2) {
      const rect = this.update2.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.update2InView = topShown && bottomShown;
    }
    
    if (this.update3) {
      const rect = this.update3.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.update3InView = topShown && bottomShown;
    }
    
    if (this.update4) {
      const rect = this.update4.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.update4InView = topShown && bottomShown;
    }
    
    if (this.update5) {
      const rect = this.update5.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.update5InView = topShown && bottomShown;
    }
    
    if (this.update6) {
      const rect = this.update6.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= -150;
      const bottomShown = rect.bottom <= window.innerHeight + 200;
      this.update6InView = topShown && bottomShown;
    }
  }
}
