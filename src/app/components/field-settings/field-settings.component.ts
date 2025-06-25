import { Component, inject } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-field-settings',
  templateUrl: './field-settings.component.html',
  styleUrl: './field-settings.component.scss',
  standalone: false,
})
export class FieldSettingsComponent {
formService = inject(FormService)
}
