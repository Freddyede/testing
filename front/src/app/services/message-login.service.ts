import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageLoginService {
  private message: string;
  constructor() { }
  setMessage(newMessage: string) {
    this.message = newMessage;
  }
  getMessage() {
    return this.message;
  }
}
