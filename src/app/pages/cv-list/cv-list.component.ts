import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedTableComponent } from '../../components/paginated-table/paginated-table.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UploadModalComponent } from "../../components/upload-modal/upload-modal.component";
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { MultiStepFormComponent } from "../multi-step-form/multi-step-form.component";
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CommonModule, PaginatedTableComponent, NavbarComponent, UploadModalComponent, CustomButtonComponent, MultiStepFormComponent],
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  showUploadModal = false;
  showMultiForm = false;
  cvList: any[] = [];
  currentPage = 0;
  itemsPerPage = 3;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.loadUploadedFiles();
  }

loadUploadedFiles(): void {
  this.cvService.getAllCvs().subscribe({
    next: (data) => {
      this.cvList = data.map((cv: any) => {
        return {
          date: new Date(cv.createdAt),
          nom: cv.email?.split("@")[0] + "_cv.jpg", // ou extrait d’un autre champ si tu l’as
          type: cv.image ? 'Image' : 'PDF converti',
          candidat: cv.name,
          link: "#" // ou un lien réel plus tard
        };
      });
      console.log("📂 CVs formatés pour affichage :", this.cvList);
    },
    error: (err) => {
      console.error("❌ Erreur chargement CVs :", err);
    }
  });
}



  get paginatedCvs() {
    const start = this.currentPage * this.itemsPerPage;
    return this.cvList.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.cvList.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 0) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }
}
