package dyscalculiaHelper.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dyscalculiaHelper.entity.MixQuestionsEntity;

@Repository
public interface MixQuestionsRepository extends CrudRepository<MixQuestionsEntity,Long>{

	Iterable<MixQuestionsEntity> findBylevel(String level);

}
