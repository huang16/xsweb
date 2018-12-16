import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkmicroComponent } from './markmicro.component';

describe('MarkmicroComponent', () => {
  let component: MarkmicroComponent;
  let fixture: ComponentFixture<MarkmicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkmicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkmicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
