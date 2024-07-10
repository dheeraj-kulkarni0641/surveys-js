import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSurveyComponent } from './test-survey.component';

describe('TestSurveyComponent', () => {
  let component: TestSurveyComponent;
  let fixture: ComponentFixture<TestSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
