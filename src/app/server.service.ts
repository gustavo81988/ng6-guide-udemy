import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://udemy-ng-http-f0874.firebaseio.com/data.json',servers);
  }
  getServers() {
   
  }
  getAppName() {
    
  }
}
