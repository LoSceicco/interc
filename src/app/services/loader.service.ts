import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public startLoading() {
    this.isLoading.next(true);
  }
  public stopLoading() {
    this.isLoading.next(false);
  }
}
