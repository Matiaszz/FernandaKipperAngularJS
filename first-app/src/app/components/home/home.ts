import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  myBool: boolean = false;
  name: string = "ana";
  ariaLabel: string = "arial"

  setMyBool(value: boolean) {
    this.myBool = value;
  }

  send() {
    console.log('hello! you pressed the button.')
  }
}
