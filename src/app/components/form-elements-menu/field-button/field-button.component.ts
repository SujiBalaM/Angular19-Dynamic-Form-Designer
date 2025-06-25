import { Component, input, signal } from '@angular/core';
import { FieldTypeDefinition } from 'src/app/models/field';

@Component({
  selector: 'app-field-button',
  templateUrl: './field-button.component.html',
  styleUrl: './field-button.component.scss',
  standalone: false,
})
export class FieldButtonComponent {
fieldType = input.required<FieldTypeDefinition>()
whileDragging = signal(false);
}
