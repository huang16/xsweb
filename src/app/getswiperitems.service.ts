import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { SWIPERITEMDETAILS ,swiperitemdetails} from './mock-swipers'

@Injectable({
  providedIn: 'root'
})
export class GetswiperitemsService {

  constructor() { }

  getSwiperItems():Observable<swiperitemdetails[]>{
    return of(SWIPERITEMDETAILS);
  }
}
