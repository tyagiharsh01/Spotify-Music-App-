package com.niit.Spotify.services;

import com.niit.Spotify.Repository.SongRepo;
import com.niit.Spotify.domain.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public class SongServiceImpl implements SongService{
    private SongRepo songRepo;
     @Autowired
    public SongServiceImpl(SongRepo songRepo) {
        this.songRepo = songRepo;
    }

    @Override
    public List<Song> getAllSong() {
        return songRepo.findAll();
    }

    @Override
    public List<Song> addAllSong(List<Song> songList) {
        return songRepo.saveAll(songList);
    }


}
