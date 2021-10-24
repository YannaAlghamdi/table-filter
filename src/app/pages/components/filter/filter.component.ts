import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Column } from 'src/app/models/column';
import { Filter } from 'src/app/models/filter';
import { Operator } from 'src/app/models/operator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() fields: Array<Column>;
  @Output() addFilter: EventEmitter<Filter> = new EventEmitter();
  private added: boolean;
  private operators: Array<Operator>;
  private form: FormGroup;
  private filter: Filter;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.operators = Object.values(Operator);
    this.form = this.formBuilder.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required]
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

  add() {
    this.filter = new Filter()
      .withField(this.form.get('field').value)
      .withOperator(this.form.get('operator').value)
      .withValue(this.form.get('value').value);
    this.addFilter.emit(this.filter);
    this.added = true;
  }

}
