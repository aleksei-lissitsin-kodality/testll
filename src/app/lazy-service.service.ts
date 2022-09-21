import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyServiceService {

  constructor() { }

  public hello(): string {
    return "hello";
  }
}
