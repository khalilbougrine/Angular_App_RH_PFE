import { Component } from '@angular/core';
import { UploadModalComponent } from "../../components/upload-modal/upload-modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-upload',
  standalone: true,
  imports: [CommonModule, UploadModalComponent],  // AJOUTE UploadModalComponent ici
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.scss']
})
export class TestUploadComponent {
  showModal = true;
}
