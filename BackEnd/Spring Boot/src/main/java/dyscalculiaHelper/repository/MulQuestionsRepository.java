package dyscalculiaHelper.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dyscalculiaHelper.entity.MulQuestionsEntity;
@Repository
public interface MulQuestionsRepository extends CrudRepository<MulQuestionsEntity,Long> {

	Iterable<MulQuestionsEntity> findBylevel(String level);

}
