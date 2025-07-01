import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class UploadModalComponent {
  @Input() mode: 'cv' | 'fiche' = 'cv';
  @Output() close = new EventEmitter<void>();
  @Output() filesUploaded = new EventEmitter<void>();

  uploadedFiles: File[] = [];

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
  }

  closeModal() {
    this.close.emit();
  }

  uploadFiles() {
    if (this.uploadedFiles.length === 0) return;

    let completed = 0;

    this.uploadedFiles.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);

      this.http.post('http://localhost:8080/api/fiches/parse-and-save', formData, { responseType: 'text' })
.subscribe({
        next: () => {
          console.log(`✅ ${file.name} traité et sauvegardé`);
          completed++;
          if (completed === this.uploadedFiles.length) {
            this.filesUploaded.emit(); // 🔄 détection upload fini
            this.closeModal();
          }
        },
        error: err => {
          console.error(`❌ Erreur traitement de ${file.name}`, err);
        }
      });
    });
  }
}
