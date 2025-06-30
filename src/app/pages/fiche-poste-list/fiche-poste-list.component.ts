import { Component, OnInit } from '@angular/core';
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
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CustomButtonComponent,
    UploadModalComponent,
    PromptInputComponent,
    MatchingResultTableComponent,
    PaginatedTableComponent,
    MultiStepFormComponent
  ],
  templateUrl: './fiche-poste-list.component.html',
  styleUrls: ['./fiche-poste-list.component.scss']
})
export class FichePosteListComponent implements OnInit {
  showUploadModal = false;
  showPrompt = false;
  showMatching = false;
  selectedCandidateId = null;
  showMultiForm: any;

  fichePostes: any[] = [];
  currentPage = 0;
  itemsPerPage = 3;

  ngOnInit(): void {
    this.loadFiches();
  }

loadFiches(): void {
  this.fichePostes = JSON.parse(localStorage.getItem('fichePostes') || '[]');
  console.log("📂 fichePostes chargées :", this.fichePostes);
}


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
