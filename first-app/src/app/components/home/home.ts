import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SendForm } from '../../services/send-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  mustShowTitle: boolean = false;
  name: string = "ana";
  ariaLabel: string = "arial";
  listItems = [
    { id: 1, txt: "i1" },
    { id: 2, txt: "i2" },
    { id: 3, txt: "i3" }
  ];

  private sendFormService = inject(SendForm);
  @Input() myProp!: string;
  @Output() emitPropValue = new EventEmitter<string>();

  setMyBool(value: boolean) {
    this.mustShowTitle = value;
  }

  send() {
    console.log('hello! you pressed the button.');
    this.setMyBool(!this.mustShowTitle);
    this.sendFormService.sendInfoToBackend("Sending information...");
    this.emitPropValue.emit("sirigaita");
  }
}
