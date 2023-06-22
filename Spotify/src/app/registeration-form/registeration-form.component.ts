import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from '../Services/spotify.service';
import { User } from 'src/model/User';
import { SpotifyRouterService } from '../Services/spotify-router.service';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent {
  
  formData?:User | undefined;
  status:boolean=false;

  constructor(private fb: FormBuilder,private spotifyService:SpotifyService, private router:SpotifyRouterService) { }

registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  onSubmit() {
    this.formData = {
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password
    };
  
    this.spotifyService.register(this.formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    alert("data is added")
    this.registrationForm.reset();
    this.router.navigateToHome();
    this.status=true;
  }
  canDeactivate(){
    if(!this.status){
      this.status=confirm("Are you want to leave");

    }
    return this.status;
  }


}
