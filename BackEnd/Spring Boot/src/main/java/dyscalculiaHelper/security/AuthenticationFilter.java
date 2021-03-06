package dyscalculiaHelper.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.BeanUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.fasterxml.jackson.databind.ObjectMapper;

import dyscalculiaHelper.SpringApplicationContext;
import dyscalculiaHelper.dto.UserDto;
import dyscalculiaHelper.request.SignUpUserRequest;
import dyscalculiaHelper.response.UserLoginResponse;
import dyscalculiaHelper.services.UserServices;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	 private final AuthenticationManager authenticationManager;
	    
	 
	    public AuthenticationFilter(AuthenticationManager authenticationManager) {
	        this.authenticationManager = authenticationManager;
	    }
	    
	    @Override
	    public Authentication attemptAuthentication(HttpServletRequest req,
	                                                HttpServletResponse res) throws AuthenticationException {
	        try {
	            SignUpUserRequest creds = new ObjectMapper()//contain the email and password in object
	                    .readValue(req.getInputStream(),SignUpUserRequest.class);
	            
	            //it makes the authentication with the database ,through the method in UserServiceimpl to DB 
	            return authenticationManager.authenticate(
	                    new UsernamePasswordAuthenticationToken(creds.getEmail(),
	                    		creds.getPassword(),new ArrayList<>())
	            );
	            
	        } catch (IOException e) {
	            throw new RuntimeException();
	        }
	    }
	    
	    //this gets override if the authentication is success
	    @Override
	    protected void successfulAuthentication(HttpServletRequest req,
	                                            HttpServletResponse res,
	                                            FilterChain chain,
	                                            Authentication auth) throws IOException, ServletException {
	        
	        String userName = ((User) auth.getPrincipal()).getUsername();  
	        
	        //token creation with JWTS
	        String token = Jwts.builder()
	                .setSubject(userName)
	                .setExpiration(new Date(System.currentTimeMillis() + SecurityConstant.EXPIRATION_TIME))
	                .signWith(SignatureAlgorithm.HS512, SecurityConstant.TOKEN_SECRET )
	                .compact();
	        
	        UserServices userService = (UserServices)SpringApplicationContext.getBean("userServicesImpl");
	        UserDto userDto = userService.getUser(userName);
	        
	        res.resetBuffer();
	        res.setStatus(200);
	        res.setHeader("Content-Type", "application/json");
	        res.addHeader(SecurityConstant.HEADER_STRING, SecurityConstant.TOKEN_PREFIX + token);
	        res.addHeader("USERID", userDto.getUserId());
	        UserLoginResponse userRes=new UserLoginResponse(); 
	        BeanUtils.copyProperties(userDto,userRes);
	        res.getOutputStream().print(new ObjectMapper().writeValueAsString(userRes));
	        res.flushBuffer(); // marks response as committed -- if we don't do this the request will go through normally!
	    }  

}