import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [
    './assets/images/banner.jpg',
    './assets/images/image1.png',
    './assets/images/image2.jpg'
  ];
}
