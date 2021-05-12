import { TokenStorage } from './../login-core/token-storage';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class ToggleLoginService {

  loggedIn: boolean;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private token: TokenStorage
  ) { }

  getLoggedIn(): boolean {
    return this.loggedIn;
  }

  toggle() {
    if (this.loggedIn === true) {
      this.loggedIn = false;
    } else if (this.loggedIn === false) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    this.change.emit(this.loggedIn);
  }
}
