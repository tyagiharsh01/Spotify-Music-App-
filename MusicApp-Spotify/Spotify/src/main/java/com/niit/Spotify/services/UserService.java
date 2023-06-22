package com.niit.Spotify.services;

import com.niit.Spotify.domain.PlayList;
import com.niit.Spotify.domain.Song;
import com.niit.Spotify.domain.User;

import java.util.List;

public interface UserService {
    public User createPlayList(User user);
    public User addPlayList(String email, PlayList playList);
    public void deletePlayList(String email,String playListName);
    public List<Song> ShowPlayListSong(String email,String PlayListName);

    public  List<PlayList> allPlayList(String email);
}
