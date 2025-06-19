import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatedTableComponent } from '../../components/paginated-table/paginated-table.component';

@Component({
  selector: 'app-cv-list',
  standalone: true,
  imports: [CommonModule, PaginatedTableComponent],
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent {
  cvList = [
    { date: '20-06-2024', nom: 'Yassine-chalati-CV.pdf', type: 'pdf', link: '/assets/Yassine-chalati-CV.pdf' },
    { date: '20-05-2024', nom: 'Khalil-CV.docs', type: 'word', link: '/assets/Khalil-CV.docs' },
    { date: '20-04-2024', nom: 'Abderahmane.png', type: 'image', link: '/assets/Abderahmane.png' },
  ];
}
