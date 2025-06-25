import { Injectable, computed, signal } from '@angular/core';
import { FormField } from '../models/field';
import { FormRow } from '../models/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private _rows = signal<FormRow[]>([]);
  private _selectedFieldId = signal<string | null>(null);
  public readonly rows = this._rows.asReadonly(); // Expose as readonly signal
  public readonly selectedField = computed(()=> this._rows()
.flatMap(row => row.fields)
.find(f=> f.id === this._selectedFieldId()),
);

  constructor() {
    this._rows.set([
      { id: crypto.randomUUID(), fields: [] },
    ]);
  }
  addField(field:FormField,rowId:string,index?:number){
    const rows = this._rows();
    console.log(rows)
    const newRows = rows.map((row) => {
      if(row.id === rowId){
        const updatedField = [...row.fields];
        if(index != undefined){
          updatedField.splice(index,0,field);
        }else{
          updatedField.push(field);
        }
        return {...row,fields: updatedField};
      }
      return row
    });
    this._rows.set(newRows);
  }

  onDelete(fieldId:string){
    const rows = this._rows();
    const newRows = rows.map(row =>({
      ...row,
      fields: row.fields.filter(f=>f.id != fieldId)
    }));
    this._rows.set(newRows)
  }
  addRow() {
    const newRows:FormRow = {
      id:crypto.randomUUID(),
      fields:[],
    }
    const rows = this._rows();
    this._rows.set([...rows,newRows])
  }
  deleteRow(rowId:string){
    if(this._rows().length == 1){
      return;
    }
    const rows = this._rows();
    const newRows = rows.filter(row => row.id !== rowId);
    this._rows.set(newRows)
  }
  moveField(fieldId:string,sourceRowId:string,targetRowId:string,targetIndex:number=-1){
    const rows = this._rows();

    let fieldToMove:FormField | undefined;
    let sourceRowIndex = -1;
    let sourceFieldIndex = -1;

    rows.forEach((row,rowIndex)=>{
      if(row.id === sourceRowId){
        sourceRowIndex = rowIndex;
        sourceFieldIndex = row.fields.findIndex(f=>f.id === fieldId);
        if(sourceFieldIndex >= 0){
          fieldToMove = row.fields[sourceFieldIndex];
        }
      }
    });
    if(!fieldToMove) return;
    //removing the field from exixting row
    const newRows = [...rows];
    const fieldsWithRemovedField = newRows[sourceRowIndex].fields.filter(f=> f.id !== fieldId);
    newRows[sourceRowIndex].fields = fieldsWithRemovedField;

    //adding the field to target row
    const targetRowIndex = newRows.findIndex(r => r.id === targetRowId);

    if(targetRowIndex >=0){
      const targetFields = [...newRows[targetRowIndex].fields];
      targetFields.splice(targetIndex,0,fieldToMove);
      newRows[targetRowIndex].fields = targetFields;
    }
    this._rows.set(newRows);
  }
  setSelectedField(fieldId:string){
    this._selectedFieldId.set(fieldId)
  }
}
