package dyscalculiaHelper.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dyscalculiaHelper.entity.UserEntity;

@Repository
public interface UserRepository extends CrudRepository<UserEntity,String> {

	UserEntity findByEmail(String email);

	UserEntity findByUserId(String id);

}
