import { Component, OnInit } from '@angular/core';

import { GetnormalstorysService } from '../getnormalstorys.service'
@Component({
  selector: 'app-nml-story-container',
  templateUrl: './nml-story-container.component.html',
  styleUrls: ['./nml-story-container.component.css']
})


export class NmlStoryContainerComponent implements OnInit {

  constructor(private getnormalstorysService:GetnormalstorysService ) { }


  nmlstories=<normalstorydetail[]>[]

  getNewNormalStory():void{
      this.getnormalstorysService.getnormalstory()
      .subscribe(items => this.nmlstories=this.nmlstories.concat(items))
  }

  ngOnInit() {
    this.getNewNormalStory();
  }

}
export type normalstorydetail={
  title:string;
  summary:string;
  authicon:string;
  readnum:number;
  marknum:number;
  supportnum:number;
  sharenum:number;
}
