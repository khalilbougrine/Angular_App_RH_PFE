import { Component } from '@angular/core';

@Component({
  selector: 'app-form-personal-info',
  templateUrl: './form-personal-info.component.html',
  styleUrls: ['./form-personal-info.component.scss'],
  standalone: true
})
export class FormPersonalInfoComponent {
  personalInfo = {
    nom: '',
    prenom: '',
    profil: ' ',
    adresse: '',
    ville: '',
    codePostal: ''
  };
}
