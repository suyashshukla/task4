import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private hp:HttpClient) { }
  info(): Observable<any>{
    return this.hp.get('http://Backend.scrapshut.com/api/service/post');

  }


  
}
