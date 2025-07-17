import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-step-card',
  standalone: true,
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss']
})
export class StepCardComponent {
  @Input() label: string = '';
  @Input() icon: string = '';

  @Input() set selected(value: boolean) {
    this._selected = value;
  }

  get selected(): boolean {
    return this._selected;
  }

  @HostBinding('class.selected') private _selected = false;
}
