import { Component, computed, inject, input } from '@angular/core';
import { FormField } from 'src/app/models/field';
import { FieldTypesService } from 'src/app/services/field-types.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  standalone:false
})
export class FormFieldComponent {
field = input.required<FormField>();
formService = inject(FormService);

onDelete(event:Event){
event.stopPropagation();
this.formService.onDelete(this.field().id)
}
}
