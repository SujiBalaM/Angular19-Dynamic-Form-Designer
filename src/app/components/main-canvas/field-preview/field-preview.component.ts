import { Component, computed, inject, input } from '@angular/core';
import { FormField } from 'src/app/models/field';
import { FieldTypesService } from 'src/app/services/field-types.service';

@Component({
  selector: 'app-field-preview',
  templateUrl: './field-preview.component.html',
  styleUrl: './field-preview.component.scss',
  standalone:false
})
export class FieldPreviewComponent {
field = input.required<FormField>();
fieldTypeService = inject(FieldTypesService)
previewComponent = computed(() => {
  const type = this.fieldTypeService.getFieldType(this.field().type);
  return type?.component ?? null;
})

}
