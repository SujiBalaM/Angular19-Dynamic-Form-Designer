import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormElementsMenuComponent } from './components/form-elements-menu/form-elements-menu.component';
import { MainCanvasComponent } from './components/main-canvas/main-canvas.component';
import { FieldSettingsComponent } from './components/field-settings/field-settings.component';
import { FieldButtonComponent } from './components/form-elements-menu/field-button/field-button.component';
import { MatIconModule } from '@angular/material/icon';
import { FormEditorComponent } from './components/main-canvas/form-editor/form-editor.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormFieldComponent } from './components/main-canvas/form-field/form-field.component';
import { TextFieldComponent } from './components/field-types/text-field/text-field.component';
import { CheckboxFieldComponent } from './components/field-types/checkbox-field/checkbox-field.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { FormPreviewComponent } from './components/main-canvas/form-preview/form-preview.component';
import { FieldPreviewComponent } from './components/main-canvas/field-preview/field-preview.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FormElementsMenuComponent,
    MainCanvasComponent,
    FieldSettingsComponent,
    FieldButtonComponent,
    FormEditorComponent,
    FormFieldComponent,
    TextFieldComponent,
    CheckboxFieldComponent,
    FormPreviewComponent,
    FieldPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NgComponentOutlet,
    TitleCasePipe,
    MatButtonToggleModule,
    MatButtonModule

  ],
  providers: [
    {
      provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance:'outline',
        subscriptSizing:'dynamic',
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
