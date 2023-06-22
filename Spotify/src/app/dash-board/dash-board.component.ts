import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { myName } from '../GlobalVariable';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    if(this.auth.isLoggedIn==true)
  {

  }
  else{
   
  
  } 
  }
 
 
}

