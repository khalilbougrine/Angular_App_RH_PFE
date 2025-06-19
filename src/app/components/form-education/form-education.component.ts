import { Component } from '@angular/core';

@Component({
  selector: 'app-form-education',
  standalone: true,
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.scss']
})
export class FormEducationComponent {
  education = {
    etablissement: 'Alhaji Tafawa Belewa University',
    filiere: 'Computer science',
    pays: 'Nigeria',
    debut: '10/17',
    fin: '11/21',
    actuel: true
  };
}
