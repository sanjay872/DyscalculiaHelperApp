package dyscalculiaHelper.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dyscalculiaHelper.entity.AddQuestionsEntity;
import dyscalculiaHelper.entity.MixQuestionsEntity;
import dyscalculiaHelper.entity.MulQuestionsEntity;
import dyscalculiaHelper.entity.SubQuestionsEntity;
import dyscalculiaHelper.entity.TestResultsEntity;
import dyscalculiaHelper.repository.AddQuestionsRepository;
import dyscalculiaHelper.repository.MixQuestionsRepository;
import dyscalculiaHelper.repository.MulQuestionsRepository;
import dyscalculiaHelper.repository.SubQuestionsRepository;
import dyscalculiaHelper.repository.TestResultsRepository;
import dyscalculiaHelper.request.TestResultsRequest;
import dyscalculiaHelper.response.QuestionsResponse;
import dyscalculiaHelper.services.QuestionsServices;
@Service
public class QuestionsServicesImpl implements QuestionsServices {

	@Autowired
	AddQuestionsRepository addQuestionsRepository;
	
	@Autowired
	SubQuestionsRepository  subQuestionsRepository;
	
	@Autowired
	MulQuestionsRepository  mulQuestionsRepository;
	
	@Autowired
	MixQuestionsRepository  mixQuestionsRepository;
	
	@Autowired
	TestResultsRepository testResultsRepository;
	
	@Override
	public List<QuestionsResponse> getAddQuestions(String level) {
		List<QuestionsResponse> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<AddQuestionsEntity> questions=addQuestionsRepository.findBylevel(level);
		for (AddQuestionsEntity questionEntity:questions) {
			returnvalue.add(modelMapper.map(questionEntity,QuestionsResponse.class));
		}
		return returnvalue;
	}

	@Override
	public List<QuestionsResponse> getSubQuestions(String level) {
		List<QuestionsResponse> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<SubQuestionsEntity> questions=subQuestionsRepository.findBylevel(level);
		for (SubQuestionsEntity questionEntity:questions) {
			returnvalue.add(modelMapper.map(questionEntity,QuestionsResponse.class));
		}
		return returnvalue;
	}

	@Override
	public List<QuestionsResponse> getMulQuestions(String level) {
		List<QuestionsResponse> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<MulQuestionsEntity> questions=mulQuestionsRepository.findBylevel(level);
		for (MulQuestionsEntity questionEntity:questions) {
			returnvalue.add(modelMapper.map(questionEntity,QuestionsResponse.class));
		}
		return returnvalue;
	}

	@Override
	public List<QuestionsResponse> getMixQuestions(String level) {
		List<QuestionsResponse> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<MixQuestionsEntity> questions=mixQuestionsRepository.findBylevel(level);
		for (MixQuestionsEntity questionEntity:questions) {
			returnvalue.add(modelMapper.map(questionEntity,QuestionsResponse.class));
		}
		return returnvalue;
	}

	@Override
	public void updateResults(TestResultsRequest req) {
		Iterable<TestResultsEntity> testResults=testResultsRepository.findAllByUserIdAndSection(req.getUserId(), req.getSection());
		TestResultsEntity testEntity=new TestResultsEntity();
		int size = 0,flag=0;
		for(TestResultsEntity value : testResults) {
		   size++;
		}
		if(size==0)
		{
			BeanUtils.copyProperties(req,testEntity);
			testResultsRepository.save(testEntity);
		}
		else if(size>0)
		{
			for(TestResultsEntity test:testResults)
			{
				flag=1;
				if(test.getLevel().equals(req.getLevel()))
				{
							BeanUtils.copyProperties(req,test);
							testResultsRepository.save(test);
							flag=0;
							break;
				}
			}
			if(flag==1)
			{
				BeanUtils.copyProperties(req,testEntity);
				testResultsRepository.save(testEntity);
			}
				
		}
	}
}
