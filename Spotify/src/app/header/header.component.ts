import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SpotifyRouterService } from '../Services/spotify-router.service';
import { AuthService } from '../Services/auth.service';
import { myName } from '../GlobalVariable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,private spotify:SpotifyRouterService,private authService:AuthService){}
  name = localStorage.getItem('firstName');
  name1 = myName.user;
  ngOnInit(): void {
   
  } 
  submit(){
    this.route.navigateByUrl("/createPlayList");
   this. name = localStorage.getItem('firstName');
  }
  showAllSong(){
    this.route.navigateByUrl("/showSong")
  }
  showAllPlayList(){
    this.route.navigateByUrl("/playlist")
  }
  deleteSong(){
    this.route.navigateByUrl("/deletePlaylist")
  }
  logout() {
    alert('Do you want to logout?');
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    this.authService.logout();
    this.spotify.navigateToHome();
    location.reload();
  }

}
