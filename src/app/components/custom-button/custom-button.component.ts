import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() label: string = 'Bouton';
  @Input() width: string = 'auto';
  @Input() height: string = '40px';
  @Input() fontSize: string = '14px';
  @Input() padding: string = '8px 20px';
}
