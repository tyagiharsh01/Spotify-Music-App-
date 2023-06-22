package com.example.UserAuth.services;
import com.example.UserAuth.domain.User;


public interface UserService {
    public User  registerUser(User user);
    public User loginUser(User user);
}
