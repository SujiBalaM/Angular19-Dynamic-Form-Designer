import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FieldTypesService } from 'src/app/services/field-types.service';

@Component({
  selector: 'app-form-elements-menu',
  templateUrl: './form-elements-menu.component.html',
  styleUrl: './form-elements-menu.component.scss',
  standalone: false,
})
export class FormElementsMenuComponent {
filedTypeService = inject(FieldTypesService);
fields = this.filedTypeService.getAllFieldTypes();
noDropAllowed(item:CdkDrag<any>){
  return false;
}
}
