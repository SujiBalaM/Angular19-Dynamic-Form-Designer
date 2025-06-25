import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FieldTypeDefinition, FormField } from 'src/app/models/field';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
  standalone: false,
})
export class FormEditorComponent {
  formService = inject(FormService);
onDrop(event: CdkDragDrop<string>,rowId:string) {
  console.log(event);
  if(event.previousContainer.data === 'field-selector') {
    //Add row for fields
    const fieldType = event.item.data as FieldTypeDefinition;
    const newField : FormField = {
      id: crypto.randomUUID(),
      type:fieldType.type,
      ...fieldType.defaultConfig,

    }
    this.formService.addField(newField,rowId,event.currentIndex)
    return;
  }
  const dragData = event.item.data as FormField;
  const previousRowId = event.previousContainer.data as string;

  this.formService.moveField(dragData.id,previousRowId,rowId,event.currentIndex)

}
}
