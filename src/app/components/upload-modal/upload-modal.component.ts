import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
  standalone: true,
   imports: [CommonModule]
})
export class UploadModalComponent {
  @Output() close = new EventEmitter<void>();

  uploadedFiles: File[] = [];

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
}
