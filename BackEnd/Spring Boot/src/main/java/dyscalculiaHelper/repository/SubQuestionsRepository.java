package dyscalculiaHelper.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dyscalculiaHelper.entity.SubQuestionsEntity;
@Repository
public interface SubQuestionsRepository extends CrudRepository<SubQuestionsEntity,Long> {

	Iterable<SubQuestionsEntity> findBylevel(String level);

}
