import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  public serverRunning = true;

  private destroy = new Subject();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    interval(5000).pipe(takeUntil(this.destroy)).subscribe(x => {
      this.apiService.CheckServer().subscribe(responce => {
        this.serverRunning = responce;
      },
        () => this.serverRunning = false
      )
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
