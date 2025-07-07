import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedTableComponent } from '../../components/paginated-table/paginated-table.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { UploadModalComponent } from "../../components/upload-modal/upload-modal.component";
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { MultiStepFormComponent } from "../multi-step-form/multi-step-form.component";
import { CvService } from '../../services/cv.service';
import { FicheCandidatService } from '../../services/fiche-candidat.service';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [
    CommonModule,
    PaginatedTableComponent,
    NavbarComponent,
    UploadModalComponent,
    CustomButtonComponent,
    MultiStepFormComponent
  ],
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {
  showUploadModal = false;
  showMultiForm = false;
  cvList: any[] = [];
  currentPage = 0;
  itemsPerPage = 3;
  selectedFicheData: any = null;

 
  constructor(
    private cvService: CvService,
    private ficheCandidatService: FicheCandidatService
  ) {}

  ngOnInit(): void {
    this.loadUploadedFiles();
  }

loadUploadedFiles(): void {
  this.cvService.getAllCvs().subscribe({
    next: (data) => {
      this.cvList = data.map((cv: any) => {
        const nomFichier = cv.nomFichier || (cv.email?.split("@")[0] + "_cv.jpg");
        const urlImage = cv.imageUrl?.includes("http://localhost:8000/cv-image/")
          ? cv.imageUrl
          : `http://localhost:8000/cv-image/${nomFichier}`;

        console.log("🖼️ URL de l'image corrigée :", urlImage);

        return {
          id: cv.id,
          date: new Date(cv.createdAt),
          nom: nomFichier,
          type: cv.typeFichier?.includes("image") ? "Image" : "PDF converti",
          candidat: cv.name,
          image_url: urlImage,
          link: urlImage // pour afficher quand on clique sur le nom
        };
      });

      console.log("📂 CVs formatés pour affichage :", this.cvList);
    },
    error: (err) => {
      console.error("❌ Erreur chargement CVs :", err);
    }
  });
}



  voirFiche(id: number): void {
    this.ficheCandidatService.getFicheById(id).subscribe({
      next: (fiche) => {
        this.selectedFicheData = fiche;
        this.showMultiForm = true;
      },
      error: (err) => {
        console.error('Erreur récupération fiche IA', err);
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

  goToPage(page: number): void {
    this.currentPage = page;
  }

  previousPage(): void {
    if (this.currentPage > 0) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }


}
