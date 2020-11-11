import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8000/count/';

  constructor(private http: HttpClient) { }
  getCount() {
    return this.http.get(this.url);
  }
  updateCount() {
    return this.http.post(this.url, {});
  }
}
