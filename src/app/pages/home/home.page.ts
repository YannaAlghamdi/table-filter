import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.dataService.getData().subscribe(data => console.log(data));
  }

}
