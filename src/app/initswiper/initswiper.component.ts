import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-initswiper',
  templateUrl: './initswiper.component.html',
  styleUrls: ['./initswiper.component.css']
})
export class InitswiperComponent implements OnInit, AfterViewInit {

  name = 'Angular with Swiper';
  mySwiper: Swiper;
  slides = [
    'https://via.placeholder.com/300x200/FF5733/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff'
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el:'.swiper-pagination',
          type:'bullets',
          clickable:true,
        },
        autoplay:{
          delay:3000,
          stopOnLastSlide:false,
          disableOnInteraction: false,
        },
        loop:true,
    });
  }

}
