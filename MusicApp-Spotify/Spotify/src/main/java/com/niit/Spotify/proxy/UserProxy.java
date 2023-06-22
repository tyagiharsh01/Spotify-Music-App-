package com.niit.Spotify.proxy;


import com.niit.Spotify.domain.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "UserAuth",url = "http://localhost:8081")
public interface UserProxy {
    @PostMapping("/api/v1/RegisterUser")
    public ResponseEntity registerUser(@RequestBody UserDto userDto);

}
