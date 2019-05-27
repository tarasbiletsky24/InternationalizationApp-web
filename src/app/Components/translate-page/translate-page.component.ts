import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss']
})
export class TranslatePageComponent implements OnInit {

  public translateTo: string;
  public translateFrom: string;
  public gitHubRepositoryName: string;
  public gitHubLink: string;

  constructor() { }

  ngOnInit() {
  }

  public setTranslateTo(value: string) {
    this.translateTo = value;
  }

  public setTranslateFrom(value: string) {
    this.translateFrom = value;
  }

}
