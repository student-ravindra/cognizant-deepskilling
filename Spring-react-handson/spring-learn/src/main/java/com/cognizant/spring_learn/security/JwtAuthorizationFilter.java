package com.cognizant.spring_learn.security;


import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.ArrayList;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.authentication.AuthenticationManager;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;



public class JwtAuthorizationFilter extends BasicAuthenticationFilter {



    private static final String SECRET =
            "myverysecretkeymyverysecretkey123456";



    public JwtAuthorizationFilter(
            AuthenticationManager authenticationManager) {

        super(authenticationManager);

    }



    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {


        String header =
                request.getHeader("Authorization");


        if(header == null || !header.startsWith("Bearer ")) {

            chain.doFilter(request, response);
            return;

        }


        UsernamePasswordAuthenticationToken authentication =
                getAuthentication(request);


        SecurityContextHolder
                .getContext()
                .setAuthentication(authentication);



        chain.doFilter(request, response);

    }





    private UsernamePasswordAuthenticationToken getAuthentication(
            HttpServletRequest request) {


        String token =
                request.getHeader("Authorization");


        if(token != null) {


            try {


                Key key = Keys.hmacShaKeyFor(
                        SECRET.getBytes(StandardCharsets.UTF_8)
                );


                Jws<Claims> claims =
                        Jwts.parserBuilder()
                        .setSigningKey(key)
                        .build()
                        .parseClaimsJws(
                                token.replace("Bearer ", "")
                        );


                String user =
                        claims.getBody().getSubject();



                if(user != null) {


                    return new UsernamePasswordAuthenticationToken(
                            user,
                            null,
                            new ArrayList<>()
                    );

                }


            }
            catch(JwtException e) {

                return null;

            }

        }


        return null;

    }

}