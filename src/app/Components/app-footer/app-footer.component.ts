import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { EventService } from 'src/app/Services/event.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit, OnDestroy {

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
