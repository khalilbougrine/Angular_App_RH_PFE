import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-certification',
  standalone: true,
    imports: [CommonModule], 
  templateUrl: './form-certification.component.html',
  styleUrls: ['./form-certification.component.scss']
})
export class FormCertificationComponent {
certifications = [
  {
    organisation: 'Steve Jobs Designers',
    diplome: 'La Michael Angelo Award',
    date: '03/03/1998',
    description: `Thème WordPress convivial pour la création de pages, avec fonctionnalité glisser-déposer,
    pour créer rapidement votre site web professionnel. Il propose de multiples options de mise en page et
    un design entièrement réactif. Ce thème WordPress gratuit est spécialement conçu pour les coachs de vie...`
  }
];

}
