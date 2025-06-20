import { Component } from '@angular/core';
import { MatchingResultTableComponent } from '../../components/matching-result-table/matching-result-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-matching',
  standalone: true,
  imports: [CommonModule, MatchingResultTableComponent],
  templateUrl: './test-matching.component.html',
  styleUrls: ['./test-matching.component.scss']
})
export class TestMatchingComponent {}
