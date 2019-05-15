import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanddetailComponent } from './demanddetail.component';

describe('DemanddetailComponent', () => {
  let component: DemanddetailComponent;
  let fixture: ComponentFixture<DemanddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
