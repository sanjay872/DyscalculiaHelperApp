package dyscalculiaHelper.services;

import java.util.List;

import dyscalculiaHelper.request.TestResultsRequest;
import dyscalculiaHelper.response.QuestionsResponse;

public interface QuestionsServices {
	List<QuestionsResponse> getAddQuestions(String level);
	List<QuestionsResponse> getSubQuestions(String level);
	List<QuestionsResponse> getMulQuestions(String level);
	List<QuestionsResponse> getMixQuestions(String level);
	void updateResults(TestResultsRequest req);
}
