import { Component, inject, signal } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-main-canvas',
  templateUrl: './main-canvas.component.html',
  styleUrl: './main-canvas.component.scss',
  standalone: false,
})
export class MainCanvasComponent {
activeTab = signal<'editor'|'preview'>('editor');
formService = inject(FormService);
}
