import { Component, OnInit } from '@angular/core';
import { PlayList } from 'src/model/PlayList';
import { SpotifyRouterService } from '../Services/spotify-router.service';
import { SpotifyService } from '../Services/spotify.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show-play-list',
  templateUrl: './show-play-list.component.html',
  styleUrls: ['./show-play-list.component.css']
})
export class ShowPlayListComponent implements OnInit {
  playList?:PlayList[]
  constructor(private spotify:SpotifyService){}
  ngOnInit(): void {
    this.spotify.showAllPlayList().subscribe({
      next:data=>{
        this.playList=data;
      },
      error:e=>{
        alert("Failed to fetch PlayList");
      }
    })
  }


}
