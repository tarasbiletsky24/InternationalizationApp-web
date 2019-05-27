import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'language-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class LanguageDropdownComponent implements OnInit {

  @Input()
  public Title: string;

  @Output()
  public select = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public selected(value: string) {
    this.select.emit(value);
  }

}
