package com.niit.Spotify.Repository;

import com.niit.Spotify.domain.Song;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepo extends MongoRepository<Song,String> {
}
