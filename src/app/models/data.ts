import { Filter } from './filter';

export class Data {
  private columns: Array<string>;
  private filters: Array<Filter>;
  private results: Array<any>;

  public getColumns(): Array<string> { return this.columns; }
  public withColumns(arg: Array<string>) { this.columns = arg; return this; }

  public getFilters(): Array<Filter> { return this.filters; }
  public withFilters(arg: Array<Filter>) { this.filters = arg; return this; }

  public getResults(): Array<any> { return this.results; }
  public withResults(arg: Array<any>) { this.results = arg; return this; }
}
