package com.example.UserAuth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class UserDto {
    private String firstName;
    private String lastName;
    @Id
    private String email;
    private String password;
}
