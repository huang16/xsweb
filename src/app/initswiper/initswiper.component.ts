import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GetswiperitemsService} from '../getswiperitems.service';

import Swiper from 'swiper';
import { from } from 'rxjs';

import{ swiperitemdetails } from '../mock-swipers'

@Component({
  selector: 'app-initswiper',
  templateUrl: './initswiper.component.html',
  styleUrls: ['./initswiper.component.css']
})
export class InitswiperComponent implements OnInit, AfterViewInit {

  name = 'Angular with Swiper';
  mySwiper: Swiper;
  inislides : swiperitemdetails[];
  slides=[];
  clickurls=[];
  constructor(private getswiperitemsService: GetswiperitemsService) { }

  getSwiperdetails():void{
    this.getswiperitemsService.getSwiperItems()
        .subscribe(items => this.inislides=items);
    for(let s of this.inislides){
      this.slides.push(s.imgurl);
      this.clickurls.push(s.linkurl);
    }
  }

  ngOnInit() {
    this.getSwiperdetails();
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
