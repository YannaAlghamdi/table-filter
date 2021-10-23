import { Operator } from './operator';

export class Filter {
  private columnName: string;
  private operator: Operator;
  private value: string | number;

  public getColumnName(): string { return this.columnName; }
  public withColumnName(arg: string) { this.columnName = arg; return this; }

  public getOperator(): Operator { return this.operator; }
  public withOperator(arg: Operator) { this.operator = arg; return this; }

  public getValue(): string | number { return this.value; }
  public withValue(arg: string | number) { this.value = arg; return this; }
}
