import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { PlayList } from 'src/model/PlayList';
import { Song } from 'src/model/Song';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  URL:String="http://localhost:8081"
  SpotifyUrl:string ="http://localhost:8082"
  public song:Song={}
  constructor(private http:HttpClient) { }

  register(formData:User ): Observable<User> {
    return this.http.post(`${this.SpotifyUrl}/api/spotify/v1/createPlayList`, formData);
  }

  login(loginData:User){
    console.log(loginData);
    
    return this.http.post(`${this.URL}/api/v1/login`,loginData)
  }
  getAllSong():Observable<Array<Song>>{
   return this.http.get<Array<Song>>(`${this.SpotifyUrl}/api/spotify/v1/AllSong`)
  }
  createPlaylist(playList:PlayList){
      
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('jwt')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);
    
    return this.http.post(`${this.SpotifyUrl}/api/spotify/v1/add/Playlist`,playList,reqOption)

  }
  getAllSongFromPlayList(playListName:string){
    let email = localStorage.getItem("email");
    console.log(playListName)
    console.log(email);
    return this.http.get<Array<Song>>(`${this.SpotifyUrl}/api/spotify/v1/showAllSongPlaylist/${email}/${playListName}`)

  }
  deletePlayList(playListName:string){
    let email = localStorage.getItem("email");
    console.log(playListName)
    console.log(email);
    return this.http.delete(`${this.SpotifyUrl}/api/spotify/v1/deletePlayList/${email}/${playListName}`);

  }
  showAllPlayList():Observable<Array<PlayList>>{
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('jwt')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);
    return this.http.get<Array<PlayList>>(`${this.SpotifyUrl}/api/spotify/v1/allPlayList`,reqOption);
  }
  
}
