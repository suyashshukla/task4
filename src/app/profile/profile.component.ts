import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http:DataServiceService) { }
  arr={}
 
  ngOnInit(): void {
    this.http.info().subscribe(pp => this.arr=pp)
  }
  
}