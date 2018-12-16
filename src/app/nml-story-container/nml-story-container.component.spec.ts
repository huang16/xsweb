import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmlStoryContainerComponent } from './nml-story-container.component';

describe('NmlStoryContainerComponent', () => {
  let component: NmlStoryContainerComponent;
  let fixture: ComponentFixture<NmlStoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmlStoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmlStoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
