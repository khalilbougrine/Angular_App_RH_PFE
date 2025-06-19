import { Component } from '@angular/core';

@Component({
  selector: 'app-form-experience',
  standalone: true,
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.scss']
})
export class FormExperienceComponent {
  experience = {
    poste: 'Google designers HQ',
    entreprise: 'Alphabet',
    intitulePoste: 'Senior Product designer',
    adresse: 'Mountain View, California, United States',
    debut: '09/24',
    fin: '',
    actuel: true,
    description: `Thème WordPress convivial pour la création de pages, avec fonctionnalité glisser-déposer...`
  };
}
