package dyscalculiaHelper.serviceImpl;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dyscalculiaHelper.entity.AddQuestionsEntity;
import dyscalculiaHelper.entity.MixQuestionsEntity;
import dyscalculiaHelper.entity.MulQuestionsEntity;
import dyscalculiaHelper.entity.SubQuestionsEntity;
import dyscalculiaHelper.repository.AddQuestionsRepository;
import dyscalculiaHelper.repository.MixQuestionsRepository;
import dyscalculiaHelper.repository.MulQuestionsRepository;
import dyscalculiaHelper.repository.SubQuestionsRepository;
import dyscalculiaHelper.request.AdminRequest;
import dyscalculiaHelper.services.AdminServices;
@Service
public class AdminServicesImpl implements AdminServices {

	@Autowired
	AddQuestionsRepository  addQuestionsRepository;
	
	@Autowired
	SubQuestionsRepository  subQuestionsRepository;
	
	@Autowired
	MulQuestionsRepository  mulQuestionsRepository;
	
	@Autowired
	MixQuestionsRepository  mixQuestionsRepository;
	
	@Override
	public void newAddQuestion(AdminRequest req) {
		AddQuestionsEntity addEntity=new AddQuestionsEntity();
		BeanUtils.copyProperties(req,addEntity);
		addQuestionsRepository.save(addEntity);
	}

	@Override
	public void newSubQuestion(AdminRequest req) {
		SubQuestionsEntity subEntity=new SubQuestionsEntity();
		BeanUtils.copyProperties(req,subEntity);
		subQuestionsRepository.save(subEntity);
		
	}

	@Override
	public void newMulQuestion(AdminRequest req) {
		MulQuestionsEntity mulEntity=new MulQuestionsEntity();
		BeanUtils.copyProperties(req,mulEntity);
		mulQuestionsRepository.save(mulEntity);
	}

	@Override
	public void newMixQuestion(AdminRequest req) {
		MixQuestionsEntity mixEntity=new MixQuestionsEntity();
		BeanUtils.copyProperties(req,mixEntity);
		mixQuestionsRepository.save(mixEntity);
		
	}


}
