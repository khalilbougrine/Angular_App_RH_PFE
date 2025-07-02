import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepCardComponent } from '../../components/step-card/step-card.component';
import { FormPersonalInfoComponent } from '../../components/form-personal-info/form-personal-info.component';
import { FormEducationComponent } from '../../components/form-education/form-education.component';
import { FormExperienceComponent } from '../../components/form-experience/form-experience.component';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { FormCertificationComponent } from '../../components/form-certification/form-certification.component';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [
    CommonModule,
    StepCardComponent,
    FormPersonalInfoComponent,
    FormEducationComponent,
    FormExperienceComponent,
    FormContactComponent,
    FormCertificationComponent
  ],
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnChanges {
  @Input() fiche: any;

  personalInfo: any = {
    name: '',
    profil: '',
    adresse: '',
    birthdate: ''
  };

  educationData: any = {
    etablissement: '',
    filiere: '',
    pays: '',
    debut: '',
    fin: '',
    actuel: false
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fiche'] && this.fiche) {
      console.log("📥 Fiche IA reçue :", this.fiche);

      this.personalInfo = {
        name: this.fiche.name?.split(' ')[0] || '',
        profil: this.fiche.profil || '',
        adresse: this.fiche.address || '',
        birthdate: this.fiche.birthdate || ''
      };

      try {
        const educationArray = JSON.parse(this.fiche.education || '[]');
        const first = educationArray[0] || '';

        this.educationData = {
          etablissement: first || 'Établissement inconnu',
          filiere: educationArray[1] || '',
          pays: 'Maroc',
          debut: '09/20',
          fin: '06/25',
          actuel: true
        };
      } catch (e) {
        console.error('❌ Erreur parsing education :', e);
      }
    }
  }

  steps = [
    { label: 'Information Personnelle', icon: '👤' },
    { label: 'Etude', icon: '🎓' },
    { label: 'Experience', icon: '💼' },
    { label: 'Coordonnées', icon: '📇' },
    { label: 'Award/Certification', icon: '🏅' }
  ];

  selectedStepIndex = 0;

  selectStep(index: number) {
    this.selectedStepIndex = index;
  }
}
