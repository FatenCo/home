import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit, AfterViewInit {
  url: string = "./assets/images/pc.jfif";

  swiper: Swiper;
  products: any[] = [
    { image: "./assets/images/pc.jfif" },
    { image: "./assets/images/pc.jfif" },
    { image: "./assets/images/pc.jfif" },
    { image: "./assets/images/pc.jfif" }
  ];

  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  changeImage(event: any) {
    this.url = event.target.src;
  }
}
