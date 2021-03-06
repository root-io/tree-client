import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class TreeService {
  contentHeader: HttpHeaders;

  constructor(public http: HttpClient) {
    this.contentHeader = new HttpHeaders().set('Content-Type', 'application/json');
  }

  list(page: number): Promise<any> {
    return this.http.get(
      environment.apiUrl + '/trees?page=' + page, { headers: this.contentHeader }
    )
    .toPromise();
  }
}
