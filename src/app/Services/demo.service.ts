import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private ourClient: HttpClient) {}

  BaseUrl =
    'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';

  getAllData() {
    return this.ourClient.get(this.BaseUrl);
  }

  getDataById(id: number) {
    return this.ourClient.get(`${this.BaseUrl}/&page=${id}`);
  }
}
