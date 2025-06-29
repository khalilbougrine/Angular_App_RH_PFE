import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() close = new EventEmitter<void>();

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
  console.log("📤 Méthode uploadFiles appelée");

  if (this.uploadedFiles.length === 0) return;

  let completed = 0;

  this.uploadedFiles.forEach(file => {
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:8080/api/upload', formData, { responseType: 'text' }).subscribe({
      next: res => {
        console.log(`✅ ${file.name} envoyé avec succès`);

        const fileRecord = {
          date: new Date().toISOString().split('T')[0],
          nom: file.name,
          type: file.type
        };

        const existing = JSON.parse(localStorage.getItem('cvList') || '[]');
        existing.push(fileRecord);
        localStorage.setItem('cvList', JSON.stringify(existing));

        completed++;
        if (completed === this.uploadedFiles.length) {
          window.location.reload(); // ✅ maintenant c’est sûr que tout est prêt
        }
      },
      error: err => {
        console.error(`❌ Erreur en envoyant ${file.name}`, err);
      }
    });
  });
}

}
