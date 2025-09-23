import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendForm {
  constructor() { }

  sendInfoToBackend(info: string) {
    console.log("Sending to backend.");
  }
}
