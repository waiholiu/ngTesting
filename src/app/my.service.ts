import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class MyService {

  constructor(private http: Http) { }

  // question related
  callServer() {
    // get users from api
    this.http.get("www.google.com", null)

  }


}
