import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private apiService:ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getPeople().subscribe(
      (results:any[]) => {
        this.people = results;
      }
    )   
  }

  public people:any[] = [];

}
