import { Component, inject } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.scss',
  standalone:false
})
export class FormPreviewComponent {
formService = inject(FormService);
}
