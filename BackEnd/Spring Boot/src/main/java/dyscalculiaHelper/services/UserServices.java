package dyscalculiaHelper.services;


import org.springframework.security.core.userdetails.UserDetailsService;
import dyscalculiaHelper.dto.UserDto;

public interface UserServices extends UserDetailsService {
	UserDto getUser(String user);
	boolean checkuserid(String id);
	void createUser(UserDto req);
}
