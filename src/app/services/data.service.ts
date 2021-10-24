import { APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../models/data';
import { map } from 'rxjs/operators';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: Data;
  public data$: BehaviorSubject<Data>;

  constructor(private http: HttpClient) {
    this.data$ = new BehaviorSubject<Data>(new Data());

  }

  setData(data: Data) {
    this.data = data;
    this.data$.next(data);
  }

  get() {
    this.http.get(`${environment.fileUrl}`)
      .pipe(map((data: any) => this.processData(Object.values(data))))
      .subscribe(data => {
        this.setData(data);
      });
  }

  processData(data: any): Data {
    return new Data()
    .withColumns(Column.generateColumns(data[0]))
    .withResults(data);
  }

}
