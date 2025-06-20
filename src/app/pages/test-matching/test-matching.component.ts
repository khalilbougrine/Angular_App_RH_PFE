import { Component } from '@angular/core';
import { MatchingResultTableComponent } from '../../components/matching-result-table/matching-result-table.component';
import { CommonModule } from '@angular/common';
import { PromptInputComponent } from "../../components/prompt-input/prompt-input.component";

@Component({
  selector: 'app-test-matching',
  standalone: true,
  imports: [CommonModule, MatchingResultTableComponent, PromptInputComponent],
  templateUrl: './test-matching.component.html',
  styleUrls: ['./test-matching.component.scss']
})
export class TestMatchingComponent {}
