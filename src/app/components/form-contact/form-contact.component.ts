import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
  standalone: true
})
export class FormContactComponent {
  @Input() data: any; // { email, phone, pays, ville }
}
