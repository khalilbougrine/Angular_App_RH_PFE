import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedTableComponent } from '../../components/paginated-table/paginated-table.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UploadModalComponent } from "../../components/upload-modal/upload-modal.component";
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { MultiStepFormComponent } from "../multi-step-form/multi-step-form.component";

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CommonModule, PaginatedTableComponent, NavbarComponent, UploadModalComponent, CustomButtonComponent, MultiStepFormComponent],
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent {
    showUploadModal = false;
    showMultiForm = false;

  cvList = [
    { date: '20-06-2024', nom: 'Yassine-chalati-CV.pdf', type: 'pdf', link: '/assets/Yassine-chalati-CV.pdf' },
    { date: '20-05-2024', nom: 'Khalil-CV.docs', type: 'word', link: '/assets/Khalil-CV.docs' },
    { date: '20-04-2024', nom: 'Abderahmane.png', type: 'image', link: '/assets/Abderahmane.png' },
  ];
}
