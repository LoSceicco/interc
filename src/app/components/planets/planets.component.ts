import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(
    private apiService:ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getPlanets().subscribe(
      (results:any[]) => {
        this.planets = results;
      }
    )   
  }

  public planets:any[] = [];

}
