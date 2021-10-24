import { Operator } from './operator';

export class Filter {
  private field: string;
  private operator: Operator;
  private value: string | number;
  private index: number;

  static addCondition(filter: Filter) {
    switch(filter.getOperator()) {
      case 'contains':
        return (item => item[filter.getField()].includes(filter.getValue()));

      case '<':
        return (item => item[filter.getField()] < parseFloat(filter.getValue().toString()));

      case '>':
        return (item => item[filter.getField()] > parseFloat(filter.getValue().toString()));

      case '=':
        return (item => item[filter.getField()] === parseFloat(filter.getValue().toString()));
    }
  }


  static setConditions(filters: Array<Filter>) {
    const conditions = new Array<any>();
    filters.forEach(f => {
      conditions.push(this.addCondition(f));
    });
    return conditions;
  }

  public getField(): string { return this.field; }
  public withField(arg: string) { this.field = arg; return this; }

  public getOperator(): Operator { return this.operator; }
  public withOperator(arg: Operator) { this.operator = arg; return this; }

  public getValue(): string | number { return this.value; }
  public withValue(arg: string | number) { this.value = arg; return this; }

  public getIndex(): number { return this.index; }
  public withIndex(arg: number) { this.index = arg; return this; }


}
