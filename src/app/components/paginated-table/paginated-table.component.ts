import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() itemsPerPage: number = 5;

  @Output() showCandidat = new EventEmitter<number>(); // on émet l'id du CV


  currentPage: number = 0;
  paginatedData: any[] = [];

  ngOnInit(): void {
    this.updatePagination();
  }

  ngOnChanges(): void {
    this.updatePagination();
  }

  updatePagination(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedData = this.data.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }
}
