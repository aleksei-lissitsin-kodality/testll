import { Component, OnInit } from '@angular/core';
import { LazyServiceService } from 'src/app/lazy-service.service';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css']
})
export class LazyComponentComponent implements OnInit {

  constructor(private lazyService: LazyServiceService) { }

  public greeting: string = 'Bnojour';
  ngOnInit(): void {
    this.greeting = this.lazyService.hello();
  }

}
