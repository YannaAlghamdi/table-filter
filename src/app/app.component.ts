import { Component, OnInit } from '@angular/core';
import { Column } from './models/column';
import { Data } from './models/data';
import { Filter } from './models/filter';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private columns: Array<Column>;
  private filters: Array<Filter>;
  private initialFilters: Array<Filter>;
  private conditions: Array<any>;

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(data => {
      this.columns = data?.getColumns();
    });
    this.initialFilters = new Array();
    this.initialFilters.push(new Filter());
  }

  async ngOnInit() {
    this.filters = new Array<Filter>();
  }

  addedFilter(event: Filter) {
    this.filters.push(event);
  }

  removedFilter(event: number) {
    this.initialFilters.splice(event, 1);
    const filter = this.filters.find(f => f.getIndex() === event);
    this.filters.splice(this.filters.indexOf(filter), 1);
    if(this.filters.length > 0) {
      this.applyFilters();
    } else {
      this.clearFilters();
    }
  }

  addInitialFilter() {
    this.initialFilters.push(new Filter());
  }

  applyFilters() {
    this.conditions = Filter.setConditions(this.filters);
    const results = this.dataService.data.getResults().filter(result => this.conditions.every(c => c(result)));

    if(results.length > 0) {
      const data = new Data()
      .withColumns(Column.generateColumns(results[0]))
      .withResults(results);
      this.dataService.setData(data);
    } else {
      this.dataService.setData(null);
    }
  }

  clearFilters() {
    this.filters = new Array();
    this.initialFilters = new Array(new Filter());
    this.dataService.get();
  }

}
