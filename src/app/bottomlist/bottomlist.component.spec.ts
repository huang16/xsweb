import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomlistComponent } from './bottomlist.component';

describe('BottomlistComponent', () => {
  let component: BottomlistComponent;
  let fixture: ComponentFixture<BottomlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
