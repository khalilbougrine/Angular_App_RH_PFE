import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingResultTableComponent } from './matching-result-table.component';

describe('MatchingResultTableComponent', () => {
  let component: MatchingResultTableComponent;
  let fixture: ComponentFixture<MatchingResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingResultTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
