import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexPage implements OnInit {
  private columns: any;
  private rows: any;
  private columnMode: ColumnMode;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.generateColumns(data.getColumns());
      this.rows = data.getResults();
      console.log(this.rows);
    });
    this.columnMode = ColumnMode.force;
  }

  generateColumns(columns: Array<string>) {
    this.columns = new Array();
    columns.forEach(item => {
      this.columns.push({
        name: item.replace('_', ' '),
        prop: item
      });
    });
  }

}
