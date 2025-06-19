import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-card',
  standalone: true,
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss']
})
export class StepCardComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() selected: boolean = false;
}
