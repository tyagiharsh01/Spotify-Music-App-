package com.niit.Spotify.domain;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import  java.util.*;
@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    private String firstName;
    private String lastName;
    @Id
    private String email;
    private String password;
    private List<PlayList> lists;
}
