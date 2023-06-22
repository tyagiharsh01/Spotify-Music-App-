package com.example.UserAuth.Controller;


import com.example.UserAuth.domain.User;
import com.example.UserAuth.domain.UserDto;
import com.example.UserAuth.services.TokenGenerator;
import com.example.UserAuth.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private TokenGenerator tokenGenerator;

    @PostMapping("/RegisterUser")
    public ResponseEntity registerUser(@RequestBody UserDto userDto){
        User user = new User(userDto.getFirstName(),userDto.getLastName(),userDto.getEmail(),userDto.getPassword());
        return new ResponseEntity(userService.registerUser(user), HttpStatus.CREATED);
    }
    @PostMapping ("/login")
    public ResponseEntity logIn(@RequestBody User user){
        System.out.println(user);
        User retrivedUser = userService.loginUser(user);
        if(retrivedUser!=null){
            return new ResponseEntity(tokenGenerator.generateToken(retrivedUser),HttpStatus.OK);
        }
        else {
            return  new ResponseEntity("Failed.......",HttpStatus.EXPECTATION_FAILED);
        }
    }
}
