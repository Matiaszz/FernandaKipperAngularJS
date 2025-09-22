import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  mustShowTitle: boolean = false;
  name: string = "ana";
  ariaLabel: string = "arial";
  listItems = [
    { id: 1, txt: "cu1" },
    { id: 2, txt: "cu2" },
    { id: 3, txt: "cu3" }
  ];

  setMyBool(value: boolean) {
    this.mustShowTitle = value;
  }

  send() {
    console.log('hello! you pressed the button.');
    this.setMyBool(!this.mustShowTitle);
  }
}
