package dyscalculiaHelper.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dyscalculiaHelper.entity.TestResultsEntity;

@Repository
public interface TestResultsRepository extends CrudRepository<TestResultsEntity,Long> {

	Iterable<TestResultsEntity> findAllByUserId(String id);

	Iterable<TestResultsEntity> findAllByUserIdAndSection(String userId, String section);

}
