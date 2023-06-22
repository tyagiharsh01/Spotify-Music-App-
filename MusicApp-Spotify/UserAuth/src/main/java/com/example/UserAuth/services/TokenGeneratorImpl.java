package com.example.UserAuth.services;

import com.example.UserAuth.repository.UserRepo;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import com.example.UserAuth.domain.User;
@Service
public class TokenGeneratorImpl implements TokenGenerator{
    @Autowired
    private UserRepo userRepo;
    @Override
    public Map<String, String> generateToken(User user) {
        user.setFirstName(userRepo.findByEmailAndPassword(user.getEmail(), user.getPassword()).getFirstName());
        Map<String,String> result = new HashMap<>();
        Map<String,Object> userData = new HashMap<>();
        userData.put("firstName",user.getFirstName());
        userData.put("email",user.getEmail());
        userData.put("password",user.getPassword());
        String myToken = Jwts.builder()
                .setClaims(userData)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"secretKeyForMusicApp")
                .compact();

        result.put("firstName",user.getFirstName());
        result.put("email", user.getEmail());
        result.put("token",myToken);
        result.put("Massage","Successfully Log in...");
       return result;
    }
}
