import { Component, input } from '@angular/core';
import { FormField } from 'src/app/models/field';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  standalone:false
})
export class TextFieldComponent {
field = input.required<FormField>()
}
