package dyscalculiaHelper.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dyscalculiaHelper.dto.UserDto;
import dyscalculiaHelper.request.AdminRequest;
import dyscalculiaHelper.request.SignUpUserRequest;
import dyscalculiaHelper.request.TestResultsRequest;
import dyscalculiaHelper.response.QuestionsResponse;
import dyscalculiaHelper.services.UserServices;
import dyscalculiaHelper.services.AdminServices;
import dyscalculiaHelper.services.QuestionsServices;

@RestController
public class Controller {
	
	@Autowired
	UserServices userServices;
	
	@Autowired
	QuestionsServices  questionsServices; 
	
	@Autowired
	AdminServices adminServices;
	
	@PostMapping("/users")
	public void createUser(@RequestBody SignUpUserRequest req) {
		UserDto dto=new UserDto();
		BeanUtils.copyProperties(req, dto);
		userServices.createUser(dto);
	}
	
	@GetMapping("/add/{level}")
	public List<QuestionsResponse> getAddQuestions(@PathVariable String level )
	{
		List<QuestionsResponse> questionResponse=new ArrayList<>();
		questionResponse=questionsServices.getAddQuestions(level);
		return questionResponse;
	}
	
	@GetMapping("/sub/{level}")
	public List<QuestionsResponse> getSubQuestions(@PathVariable String level )
	{
		List<QuestionsResponse> questionResponse=new ArrayList<>();
		questionResponse=questionsServices.getSubQuestions(level);
		return questionResponse;
	}
	
	@GetMapping("/mul/{level}")
	public List<QuestionsResponse> getMulQuestions(@PathVariable String level )
	{
		List<QuestionsResponse> questionResponse=new ArrayList<>();
		questionResponse=questionsServices.getMulQuestions(level);
		return questionResponse;
	}
	
	@GetMapping("/mix/{level}")
	public List<QuestionsResponse> getMixQuestions(@PathVariable String level )
	{
		List<QuestionsResponse> questionResponse=new ArrayList<>();
		questionResponse=questionsServices.getMixQuestions(level);
		return questionResponse;
	}
	
	@PostMapping("/admin/add/create")
	public void createAddQuestions(@RequestBody AdminRequest req) {
	    adminServices.newAddQuestion(req);
	}
	@PostMapping("/admin/sub/create")
	public void createSubQuestions(@RequestBody AdminRequest req) {
		adminServices.newSubQuestion(req);
	}
	@PostMapping("/admin/mul/create")
	public void createMulQuestions(@RequestBody AdminRequest req) {
		adminServices.newMulQuestion(req);
	}
	@PostMapping("/admin/mix/create")
	public void createMixQuestions(@RequestBody AdminRequest req) {
		adminServices.newMixQuestion(req);
	}
	
	@PostMapping("/updateResults")
	public void updateResults(@RequestBody TestResultsRequest req)
	{
		questionsServices.updateResults(req);
	}
}

