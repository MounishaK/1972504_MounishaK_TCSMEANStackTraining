import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestquestionsRetrieveComponent } from './testquestions-retrieve.component';

describe('TestquestionsRetrieveComponent', () => {
  let component: TestquestionsRetrieveComponent;
  let fixture: ComponentFixture<TestquestionsRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestquestionsRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestquestionsRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
