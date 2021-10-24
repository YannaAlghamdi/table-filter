import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Column } from 'src/app/models/column';
import { Operator } from 'src/app/models/operator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() fields: Array<Column>;
  private operators: Array<Operator>;
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.operators = Object.values(Operator);
    this.form = this.formBuilder.group({
      field: [''],
      operator: [''],
      value: ['']
    });
  }

  onFieldChange() {
    const field = this.fields.find(f => f.getName() === this.form.get('field')?.value);
    if(field.getType() === 'string') {
      this.operators = [Operator.CONTAINS];
    }
    else {
      this.operators = [Operator.EQUAL, Operator.GREATER_THAN, Operator.LESS_THAN];
    }
  }

}
