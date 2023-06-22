package com.niit.Spotify.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class PlayList {
     @Id
     private  String playListName;
     private List<Song> songs;

}
