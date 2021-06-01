package dyscalculiaHelper.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dyscalculiaHelper.entity.AddQuestionsEntity;

@Repository
public interface AddQuestionsRepository extends CrudRepository<AddQuestionsEntity,Long> {
	Iterable<AddQuestionsEntity> findBylevel(String level);
}
