import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyRouterService {

  constructor(private route:Router) { }
  navigateToHome(){
    this.route.navigate([""]);
  }
  toLogin(){
    this.route.navigate(["login"])
  }
  toDashboard(){
    this.route.navigate(["dashBoard"]);
  }
  
}
