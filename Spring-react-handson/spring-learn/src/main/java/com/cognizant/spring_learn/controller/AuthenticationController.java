package com.cognizant.spring_learn.controller;


import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.security.Keys;
import java.security.Key;


@RestController
public class AuthenticationController {


    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {


        String user = getUser(authHeader);

        System.out.println("Authenticated User : " + user);


        String token = generateJwt(user);


        Map<String, String> map = new HashMap<>();

        map.put("token", token);


        return map;
    }



    private String getUser(String authHeader) {


        if (authHeader != null && authHeader.startsWith("Basic ")) {


            String encodedCredentials =
                    authHeader.substring(6);


            byte[] decodedBytes =
                    Base64.getDecoder()
                    .decode(encodedCredentials);


            String credentials =
                    new String(decodedBytes, StandardCharsets.UTF_8);


            int index = credentials.indexOf(":");


            if(index != -1) {

                return credentials.substring(0, index);

            }

        }


        return null;

    }



    private String generateJwt(String user) {


        Key key = Keys.hmacShaKeyFor(
                "myverysecretkeymyverysecretkey123456"
                .getBytes(StandardCharsets.UTF_8)
        );


        String token = Jwts.builder()

                .setSubject(user)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(System.currentTimeMillis() + 1200000)
                )

                .signWith(key, SignatureAlgorithm.HS256)

                .compact();


        return token;

    }
}