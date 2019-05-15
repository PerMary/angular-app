import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandslistComponent } from './demandslist.component';

describe('DemandslistComponent', () => {
  let component: DemandslistComponent;
  let fixture: ComponentFixture<DemandslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
