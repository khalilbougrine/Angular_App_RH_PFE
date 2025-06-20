import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchingComponent } from './test-matching.component';

describe('TestMatchingComponent', () => {
  let component: TestMatchingComponent;
  let fixture: ComponentFixture<TestMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMatchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
