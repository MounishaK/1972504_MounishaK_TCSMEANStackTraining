import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptaskdetailsRetrieveComponent } from './emptaskdetails-retrieve.component';

describe('EmptaskdetailsRetrieveComponent', () => {
  let component: EmptaskdetailsRetrieveComponent;
  let fixture: ComponentFixture<EmptaskdetailsRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptaskdetailsRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptaskdetailsRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
