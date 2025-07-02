import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-education',
  standalone: true,
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.scss']
})
export class FormEducationComponent {
  @Input() education: any;
}
