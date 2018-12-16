import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { normalstorydetail } from './nml-story-container/nml-story-container.component'
import { NMLSTORYS } from './mock-swipers'
@Injectable({
  providedIn: 'root'
})
export class GetnormalstorysService {

  constructor() { }
  getnormalstory():Observable<normalstorydetail[]>{
    return of(NMLSTORYS)
  }

}
