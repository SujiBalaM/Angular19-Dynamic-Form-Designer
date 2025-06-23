import { Injectable, signal } from '@angular/core';
import { FormField } from '../models/field';
import { FormRow } from '../models/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private _rows = signal<FormRow[]>([]);
  public readonly rows = this._rows.asReadonly(); // Expose as readonly signal
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
}
