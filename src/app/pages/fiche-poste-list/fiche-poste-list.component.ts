import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fiche-poste-list',
  standalone:true,
  imports: [CommonModule], 
  templateUrl: './fiche-poste-list.component.html',
  styleUrls: ['./fiche-poste-list.component.scss']
})
export class FichePosteListComponent {
  fichePostes = [
    { date: '20-05-2024', nom: 'fiche-poste-1', type: 'prompt' },
    { date: '20-04-2024', nom: 'fiche-poste-2.docs', type: 'pdf' },
    { date: '20-03-2024', nom: 'fiche-poste-3.pdf', type: 'docs' },
    // Ajoute plus si tu veux
  ];

  currentPage = 0;
  itemsPerPage = 3;

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
