import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prompt-input.component.html',
  styleUrls: ['./prompt-input.component.scss']
})
export class PromptInputComponent {
  promptText = '';
}
