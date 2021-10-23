import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../models/data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<Data> {
    return this.http.get(`${environment.fileUrl}`)
      .pipe(map((data: any) => this.processData(Object.values(data))));
  }

    processData(data: any): Data {
      return new Data()
        .withColumns(Object.keys(data[0]))
        .withResults(data);
    }

}
