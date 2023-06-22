package com.niit.Spotify.services;

import com.niit.Spotify.domain.Song;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface SongService {
    public List<Song> getAllSong();
    public List<Song> addAllSong(@RequestBody List<Song> songList);
}
