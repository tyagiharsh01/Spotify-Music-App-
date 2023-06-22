package com.niit.Spotify.controller;

import com.niit.Spotify.domain.PlayList;
import com.niit.Spotify.domain.Song;
import com.niit.Spotify.domain.User;
import com.niit.Spotify.services.SongService;
import com.niit.Spotify.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/spotify/v1")
public class PlayListController {
    private SongService songService;
    private UserService userService;
    @Autowired
    public PlayListController(SongService songService,UserService userService) {
        this.songService = songService;
        this.userService=userService;
    }
//    http://localhost:8082/api/spotify/v1/createPlayList
    @PostMapping("/createPlayList")
    public ResponseEntity createPlayList( @RequestBody User user){
        user.setLists(new ArrayList<>());
        System.out.println(user);
        return new ResponseEntity(userService.createPlayList(user),HttpStatus.OK);
    }
    //    http://localhost:8082/api/spotify/v1/showAllSongPlaylist
    @GetMapping("/showAllSongPlaylist/{email}/{playListName}")
    public ResponseEntity<?> displaySong(@PathVariable String email,@PathVariable String playListName){
//        System.out.println(httpServletRequest);
//        String email = (String) httpServletRequest.getAttribute("email");
        System.out.println(email);
        return new ResponseEntity<>(userService.ShowPlayListSong(email,playListName),HttpStatus.OK);
    }
    @DeleteMapping("/deletePlayList/{email}/{PlayListName}")
    public ResponseEntity deletePlayList(@PathVariable String email,@PathVariable String PlayListName){
        userService.deletePlayList(email,PlayListName);
        return new ResponseEntity(HttpStatus.OK);
    }
    @PostMapping("/add/Playlist")
    public ResponseEntity<?> addPlaylist(HttpServletRequest httpServletRequest,@RequestBody PlayList playlist){
        String email =(String) httpServletRequest.getAttribute("email");
        System.out.println(email);
        return new ResponseEntity<>(userService.addPlayList(email, playlist),HttpStatus.OK);
    }






    //http://localhost:8082/api/spotify/v1/delete/song/playList
//    @DeleteMapping("/delete/song/playlist")
//    public ResponseEntity deleteSongFromPlayList(HttpServletRequest httpServletRequest,@RequestBody Song song){
//        String email = (String) httpServletRequest.getAttribute("email");
//
//        return new ResponseEntity(userService.deleteSongFromPlayList(email,song),HttpStatus.OK);
//    }

    @GetMapping("/allPlayList")
    public ResponseEntity getAllPlayList(HttpServletRequest httpServletRequest){
        String email = (String) httpServletRequest.getAttribute("email");
        return new ResponseEntity(userService.allPlayList(email),HttpStatus.OK);
    }

    @PostMapping("/addSong")
    public ResponseEntity addListOfSong(@RequestBody List<Song> songList){
        System.out.println(songList);
        return new ResponseEntity(songService.addAllSong(songList),HttpStatus.OK);
    }
    @GetMapping("/AllSong")
    public ResponseEntity  getAllSong(){
        return new ResponseEntity<>(songService.getAllSong(),HttpStatus.OK);
    }




}
