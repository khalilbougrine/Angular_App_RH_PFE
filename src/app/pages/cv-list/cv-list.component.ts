import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedTableComponent } from '../../components/paginated-table/paginated-table.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UploadModalComponent } from "../../components/upload-modal/upload-modal.component";
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { MultiStepFormComponent } from "../multi-step-form/multi-step-form.component";
import { HttpClient } from '@angular/common/http';
import { CvFile } from '../../models/cv-file.model';

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

  constructor(private http: HttpClient) {}

cvList: any[] = [];

ngOnInit(): void {
  this.cvList = JSON.parse(localStorage.getItem('cvList') || '[]');
}


// Chargement initial (version simulée pour l’instant)
loadUploadedFiles(): void {
  this.cvList = JSON.parse(localStorage.getItem('cvList') || '[]');
}


  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const formData = new FormData();
      formData.append('file', file);

      this.http.post('http://localhost:8080/api/upload', formData).subscribe({
        next: (res) => console.log("✅ Upload réussi :", res),
        error: (err) => console.error("❌ Erreur lors de l’upload :", err)
      });
    }
  }
}
