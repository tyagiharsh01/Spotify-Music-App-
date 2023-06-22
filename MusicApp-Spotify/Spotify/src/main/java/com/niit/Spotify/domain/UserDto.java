package com.niit.Spotify.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDto {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
