import { ToggleLoginService } from './../login/toggle-login.service';
import { Router } from '@angular/router';
import { TokenStorage } from './../login-core/token-storage';
import { Component, OnInit } from '@angular/core';
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private token: TokenStorage,
    private router: Router,
    private toggleLoginService: ToggleLoginService
  ) {}

  ngOnInit() {
    if (this.token.getToken() != null) {
      this.isLoggedIn = true;
    }
    this.toggleLoginService.change.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout(): void {
    this.token.signOut();
    this.router.navigate(['login']);
    this.toggleLoginService.toggle();
  }
}
