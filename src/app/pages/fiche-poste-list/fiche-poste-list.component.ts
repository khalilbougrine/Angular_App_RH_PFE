import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { UploadModalComponent } from "../../components/upload-modal/upload-modal.component";
import { PromptInputComponent } from "../../components/prompt-input/prompt-input.component";
import { MatchingResultTableComponent } from "../../components/matching-result-table/matching-result-table.component";
import { PaginatedTableComponent } from "../../components/paginated-table/paginated-table.component";
import { MultiStepFormComponent } from "../multi-step-form/multi-step-form.component";

@Component({
  selector: 'app-fiche-poste-list',
  standalone:true,
  imports: [CommonModule, NavbarComponent, CustomButtonComponent, UploadModalComponent, PromptInputComponent, MatchingResultTableComponent, PaginatedTableComponent, MultiStepFormComponent], 
  templateUrl: './fiche-poste-list.component.html',
  styleUrls: ['./fiche-poste-list.component.scss']
})
export class FichePosteListComponent {
  showUploadModal = false;
  showPrompt = false;
  showMatching = false;
  selectedCandidateId = null; // pour plus tard si tu veux charger dynamiquement

  fichePostes = [
    { date: '20-05-2024', nom: 'fiche-poste-1', type: 'prompt' },
    { date: '20-04-2024', nom: 'fiche-poste-2.docs', type: 'pdf' },
    { date: '20-03-2024', nom: 'fiche-poste-3.pdf', type: 'docs' },
    // Ajoute plus si tu veux
  ];

  currentPage = 0;
  itemsPerPage = 3;
showMultiForm: any;

  get paginatedPostes() {
    const start = this.currentPage * this.itemsPerPage;
    return this.fichePostes.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.fichePostes.length / this.itemsPerPage);
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
