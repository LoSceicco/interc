import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptors';

  constructor(
    private loadingService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(
      (isLoading:boolean) => {
        this.showLoader = isLoading
      }
    )
  }

  public showLoader:boolean = false;

}
