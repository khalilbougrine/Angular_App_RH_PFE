import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {
  contact = {
    email: 'john.doe@example.com',
    numero: '+212 655 431 556',
    pays: 'Maroc',
    ville: 'Rabat'
  };
}
