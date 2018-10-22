import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitswiperComponent } from './initswiper.component';

describe('InitswiperComponent', () => {
  let component: InitswiperComponent;
  let fixture: ComponentFixture<InitswiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitswiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
