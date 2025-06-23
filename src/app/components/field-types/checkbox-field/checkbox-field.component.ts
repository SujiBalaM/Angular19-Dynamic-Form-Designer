import { Component, input } from '@angular/core';
import { FormField } from 'src/app/models/field';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss',
  standalone:false
})
export class CheckboxFieldComponent {
  field = input.required<FormField>()

}
