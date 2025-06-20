import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matching-result-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matching-result-table.component.html',
  styleUrls: ['./matching-result-table.component.scss']
})
export class MatchingResultTableComponent {
results = [
  { nom: 'Yassine-chalati-CV.pdf', score: '70%' },
  { nom: 'Khalil-CV.docs', score: '66%' },
  { nom: 'Abderrahmane.png', score: '43%' },
  { nom: 'TestCV1.pdf', score: '88%' },
  { nom: 'TestCV2.pdf', score: '55%' },
  { nom: 'TestCV3.pdf', score: '61%' },
  // Ajoute autant que tu veux pour tester
];

currentPage = 0;
itemsPerPage = 3;

get paginatedResults() {
  const start = this.currentPage * this.itemsPerPage;
  return this.results.slice(start, start + this.itemsPerPage);
}

get totalPages() {
  return Math.ceil(this.results.length / this.itemsPerPage);
}

goToPage(i: number) {
  this.currentPage = i;
}

nextPage() {
  if (this.currentPage < this.totalPages - 1) this.currentPage++;
}

previousPage() {
  if (this.currentPage > 0) this.currentPage--;
}

}
