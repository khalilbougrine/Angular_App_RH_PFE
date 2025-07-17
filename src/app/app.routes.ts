import { Routes } from '@angular/router';
import { CvListComponent } from './pages/cv-list/cv-list.component';
import { FichePosteListComponent } from './pages/fiche-poste-list/fiche-poste-list.component';
import { TestUploadComponent } from './pages/test-upload/test-upload.component';
import { MultiStepFormComponent } from './pages/multi-step-form/multi-step-form.component';
import { TestMatchingComponent } from './pages/test-matching/test-matching.component';
import { LoginPageComponent } from './pages/login-ui/login-page.component'; // 👈 ajoute ce composant

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'cv-list', component: CvListComponent },
  { path: 'fiche-poste', component: FichePosteListComponent },
  { path: 'test-upload', component: TestUploadComponent },
  { path: 'multi-form', component: MultiStepFormComponent },
  { path: 'test-matching', component: TestMatchingComponent }
];
