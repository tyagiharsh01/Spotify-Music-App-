import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayList } from 'src/model/PlayList';
import { Song } from 'src/model/Song';
import { SpotifyService } from '../Services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-play-list',
  templateUrl: './create-play-list.component.html',
  styleUrls: ['./create-play-list.component.css']
})
export class CreatePlayListComponent implements OnInit {
  playList:PlayList={};
 
  name=localStorage.getItem('firstName')
  
  constructor(private fb: FormBuilder,private spotifyService:SpotifyService,private router:Router) { }

  playlistForm = this.fb.group({
    playListName: ['', Validators.required],
    songs: this.fb.array([
      this.fb.group({
        title: [`${this.spotifyService.song.title}`, Validators.required],
        artist: [`${this.spotifyService.song.artist}`, Validators.required],
      })
    ])
  });
  get playListName(){
    return this.playlistForm.get('playListName')
  }

  get title(){
    return this.playlistForm.get('title')
  }

  get artist(){
    return this.playlistForm.get('artist')
  }

  get songs() {
    return this.playlistForm.get('songs') as FormArray;
  }

 

  ngOnInit(): void {
  }

  onSubmit(){ 
    this.spotifyService.createPlaylist(this.playlistForm.value).subscribe({
      next:data=>{
        this.playList=data;
        alert("added successfully")
        this.playListName?.reset()
        this.spotifyService.song={};
        
     },error(err) {
       alert("Not added");
     },
    })
      console.log(this.playList);

      alert("Added");
}
}

