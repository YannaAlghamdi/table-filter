import { Component } from '@angular/core';
import { Column } from './models/column';
import { Data } from './models/data';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private columns: Array<Column>;
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.columns = data.getColumns();
    });
  }

}
