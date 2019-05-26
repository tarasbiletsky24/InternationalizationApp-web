import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { takeUntil } from 'rxjs/operators';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  public serverRunning = false;

  private destroy = new Subject();

  constructor(
    private apiService: ApiService,
    private eventService: EventService) { }

  ngOnInit() {
    this.apiService.CheckServer().subscribe(responce => {
      this.serverRunning = responce;
      this.eventService.serverWorking(responce);
    }, 
    () => {
      this.serverRunning = false;
      this.eventService.serverWorking(false);
    });

    interval(5000).pipe(takeUntil(this.destroy)).subscribe(x => {
      this.apiService.CheckServer().subscribe(responce => {
        this.serverRunning = responce;
        this.eventService.serverWorking(responce);
      }, 
      () => {
        this.serverRunning = false;
        this.eventService.serverWorking(false);
      })
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
