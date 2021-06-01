package dyscalculiaHelper.serviceImpl;

import java.util.ArrayList;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import dyscalculiaHelper.dto.UserDto;
import dyscalculiaHelper.entity.UserEntity;
import dyscalculiaHelper.shared.Utils;
import dyscalculiaHelper.repository.UserRepository;
import dyscalculiaHelper.services.UserServices;

@Service
public class UserServicesImpl implements UserServices {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	Utils utils;
	
	@Autowired
	BCryptPasswordEncoder  bCryptPasswordEncoder; 
	
	@Override
	public void createUser(UserDto req) {
		UserEntity userEntity =new UserEntity();
		BeanUtils.copyProperties(req, userEntity);
		userEntity.setEncryptedPassword(bCryptPasswordEncoder.encode(req.getPassword()));
		userEntity.setUserId(utils.generateUserId(20));
		UserEntity storeduser=userRepository.findByEmail(req.getEmail());
		if(storeduser!=null) throw new RuntimeException("record already exist");
		userRepository.save(userEntity);
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserEntity userEntity=userRepository.findByEmail(email);
		if(userEntity==null)throw new UsernameNotFoundException(email);
		return new User(userEntity.getEmail(),userEntity.getEncryptedPassword(),new ArrayList<>());
	}
	@Override
	public UserDto getUser(String email) {
		UserDto userDto=new UserDto();
		UserEntity storeduser=userRepository.findByEmail(email);
		if(storeduser==null)throw new UsernameNotFoundException(email);
		BeanUtils.copyProperties(storeduser, userDto);
		return userDto;
	}
	@Override
	public boolean checkuserid(String id) {
		UserEntity storeduser=userRepository.findByUserId(id);
		if(storeduser==null) {
			return false;
		}
		return true;
	}

}
