import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from '../Services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { SpotifyRouterService } from '../Services/spotify-router.service';
import { AuthService } from '../Services/auth.service';
import { myName } from '../GlobalVariable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  responseData: any | undefined;


  constructor(private fb: FormBuilder,private SpotifyService:SpotifyService,private authService:AuthService,private router:SpotifyRouterService) { }

  ngOnInit() {
   this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
  
    this.SpotifyService.login(this.loginForm.value).subscribe(
      {
        next:data=>{
          this.responseData=data;
          console.log(this.responseData);
          
          localStorage.setItem('jwt',this.responseData.token)
          localStorage.setItem('email',this.responseData.email)
          localStorage.setItem('firstName',this.responseData.firstName);
          myName.user=localStorage.getItem('firstName');
          alert("Login successfully."+localStorage.getItem('firstName'));
          
          this.loginForm.reset();
          this.authService.login();
          this.router.navigateToHome();
      },error:err=>{
        alert("Not a Valid User!!!!!");
      }
      }
    )

  
  }
}

