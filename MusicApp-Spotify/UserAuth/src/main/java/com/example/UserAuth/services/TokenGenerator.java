package com.example.UserAuth.services;



import com.example.UserAuth.domain.User;

import java.util.Map;

public interface TokenGenerator {
    public Map<String,String> generateToken(User user);

}
