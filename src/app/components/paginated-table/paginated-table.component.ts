import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() itemsPerPage: number = 3;

  currentPage: number = 0;
  paginatedData: any[] = [];

  ngOnInit() {
    this.updatePagination();
  }

  updatePagination() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedData = this.data.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }
  @Output() showCandidat = new EventEmitter<void>();

}
