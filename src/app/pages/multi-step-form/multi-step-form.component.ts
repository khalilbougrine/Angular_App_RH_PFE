import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepCardComponent } from '../../components/step-card/step-card.component';
import { FormPersonalInfoComponent } from '../../components/form-personal-info/form-personal-info.component';
import { FormEducationComponent } from '../../components/form-education/form-education.component';
import { FormExperienceComponent } from '../../components/form-experience/form-experience.component';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { FormCertificationComponent } from '../../components/form-certification/form-certification.component';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

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
  styleUrls: ['./multi-step-form.component.scss'],
  animations: [
    trigger('stepAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
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

  experienceData: string[] = [];

  contactData: any = {
    email: '',
    phone: '',
    pays: '',
    ville: ''
  };

  certificationData: {
    diplome: string;
    organisation: string;
    date: string;
    description: string;
  }[] = [];

  steps = [
    { label: 'Information Personnelle', icon: '👤' },
    { label: 'Etude', icon: '🎓' },
    { label: 'Experience', icon: '💼' },
    { label: 'Coordonnées', icon: '📇' },
    { label: 'Award/Certification', icon: '🏅' }
  ];

  selectedStepIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fiche'] && this.fiche) {
      console.log("📥 Fiche IA reçue :", this.fiche);

      // Information personnelle
      this.personalInfo = {
        name: this.fiche.name?.split(' ')[0] || '',
        profil: this.fiche.profil || '',
        adresse: this.fiche.address || '',
        birthdate: this.fiche.birthdate || ''
      };

      // Études
      try {
        const educationArray = JSON.parse(this.fiche.education || '[]');
        const findLine = (label: string) =>
          educationArray.find((e: string) => e.toLowerCase().includes(label)) || '';

        this.educationData = {
          etablissement: educationArray[0] || '',
          filiere: educationArray[1] || '',
          pays: findLine('pays')?.split(':')[1]?.trim() || '',
          debut: findLine('début')?.split(':')[1]?.trim() || '',
          fin: findLine('fin')?.split(':')[1]?.trim() || '',
          actuel: !findLine('fin')
        };
      } catch (e) {
        console.error('❌ Erreur parsing education :', e);
      }

      // Expérience
      try {
        this.experienceData = JSON.parse(this.fiche.experience || '[]');
      } catch (e) {
        console.warn('❌ Erreur parsing experience :', e);
        this.experienceData = [];
      }

      // Coordonnées
      this.contactData = {
        email: this.fiche.email || '',
        phone: this.fiche.phone || '',
        pays: this.detectPays(this.fiche.address),
        ville: this.detectVille(this.fiche.address)
      };

      // Certifications
      try {
        const raw = JSON.parse(this.fiche.certifications || '[]');
        this.certificationData = this.parseCertifications(raw);
        console.log("✅ Données certification formatées :", this.certificationData);
      } catch (e) {
        console.warn("❌ Erreur parsing certifications", e);
        this.certificationData = [];
      }
    }
  }

  selectStep(index: number) {
    this.selectedStepIndex = index;
  }

  detectPays(address: string): string {
    if (!address) return '';
    if (address.toLowerCase().includes('maroc')) return 'Maroc';
    if (address.toLowerCase().includes('france')) return 'France';
    return '';
  }

  detectVille(address: string): string {
    const villesConnues = ['Rabat', 'Casablanca', 'Paris', 'Marrakech', 'Tanger'];
    const match = villesConnues.find(v =>
      address?.toLowerCase().includes(v.toLowerCase())
    );
    return match || '';
  }

  parseCertifications(certifStrings: string[]): any[] {
    return certifStrings.map(str => {
      const get = (label: string) => {
        const match = str.match(new RegExp(`${label}\\s*:?\\s*([^|\\n]+)`, 'i'));
        return match ? match[1].trim() : '';
      };

      return {
        diplome: get('Nom'),
        organisation: get('Institution'),
        date: get('Date'),
        description: get('Description') || str
      };
    });
  }
}
