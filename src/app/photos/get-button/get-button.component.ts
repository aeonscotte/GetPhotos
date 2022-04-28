import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-button',
  templateUrl: './get-button.component.html',
  styleUrls: ['./get-button.component.css']
})
export class GetButtonComponent implements OnInit {

  @Output() getPhoto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.getPhoto.emit();
  }

}
