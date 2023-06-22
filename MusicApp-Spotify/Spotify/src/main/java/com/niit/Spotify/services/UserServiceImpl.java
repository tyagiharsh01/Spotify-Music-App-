package com.niit.Spotify.services;

import com.niit.Spotify.Repository.UserRepo;
import com.niit.Spotify.domain.PlayList;
import com.niit.Spotify.domain.Song;
import com.niit.Spotify.domain.User;
import com.niit.Spotify.domain.UserDto;
import com.niit.Spotify.proxy.UserProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private UserRepo userRepo;
    private UserProxy userProxy;

    @Autowired
    public UserServiceImpl(UserRepo userRepo, UserProxy userProxy) {
        this.userRepo = userRepo;
        this.userProxy = userProxy;
    }

    @Override
    public User createPlayList(User user) {
        UserDto userDto = new UserDto(user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword());
        userProxy.registerUser(userDto);
        return userRepo.save(user);
    }

    @Override
    public User addPlayList(String email, PlayList playList) {
        User userPlayList = userRepo.findById(email).get();
        List<PlayList> playListList = userPlayList.getLists();
        boolean isPlayList = false;

        for (PlayList p : playListList) {
            if (p.getPlayListName().equals(playList.getPlayListName())) {
                List<Song> songList = p.getSongs();
                songList.add(playList.getSongs().get(0));
                p.setSongs(songList);
                isPlayList = true;
                break;
            }
        }
        if (!isPlayList) {
            playListList.add(playList);
            userPlayList.setLists(playListList);
        }
        userRepo.save(userPlayList);
        return userPlayList;
    }

    @Override
    public void deletePlayList(String email, String playListName) {
        User playList = userRepo.findById(email).get();
        List<PlayList> playListList = playList.getLists();
        for (PlayList p : playListList) {
            if (p.getPlayListName().equals(playListName)) {
                playListList.remove(p);
                userRepo.save(playList);
                break;
            }
        }
    }

    @Override
    public List<Song> ShowPlayListSong(String email, String PlayListName) {
        List<Song> songList = new ArrayList<>();
        List<PlayList> playListList = new ArrayList<>();
        if (userRepo.findById(email).isPresent()) {
            playListList = userRepo.findById(email).get().getLists();
            for (PlayList p : playListList) {
                if (p.getPlayListName().equals(PlayListName)) {
                    songList = p.getSongs();
                    break;
                }
            }
            return songList;
        }
        else {
            System.out.println("id is not present");
        }
        return songList;
    }




    @Override
    public List<PlayList> allPlayList(String email) {
        return userRepo.findById(email).get().getLists();

    }
}
