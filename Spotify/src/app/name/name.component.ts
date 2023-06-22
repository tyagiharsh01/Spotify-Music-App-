import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name :any;
  constructor(private auth:AuthService){}
  
  ngOnInit(): void {
    if(this.auth.isLoggedIn==true)
    {
     this.name = localStorage.getItem('firstName')
     console.log(this.name)
    }
    else{
       this.name="User";
    
    }
  }
}
