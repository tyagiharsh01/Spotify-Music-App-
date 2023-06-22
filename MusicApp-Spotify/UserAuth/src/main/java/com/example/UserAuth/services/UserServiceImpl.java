package com.example.UserAuth.services;

import com.example.UserAuth.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.UserAuth.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{
    private UserRepo userRepo;
    @Autowired
    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User registerUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User loginUser(User user) {
        return userRepo.findByEmailAndPassword(user.getEmail(),user.getPassword());
    }
}
