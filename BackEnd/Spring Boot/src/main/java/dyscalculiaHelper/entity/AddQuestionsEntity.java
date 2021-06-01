package dyscalculiaHelper.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity(name="AddQuestions")
public class AddQuestionsEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1041009470962108862L;
	
	@Id
	@GeneratedValue
	@Column(nullable=false)
	private long id;
	
	@Column(nullable=false)
	private String question;
	
	@Lob
	@Column(length=10000)
	private String questionimg;
	
	@Column(nullable=false)
	private String option1;
	
	@Column(nullable=false)
	private String option2;
	
	@Column(nullable=false)
	private String option3;
	
	@Column(nullable=false)
	private String option4;
	
	@Column(nullable=false)
	private String level;
	
	@Column(nullable=false)
	private String solution;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}
	
	public String getQuestionimg() {
		return questionimg;
	}

	public void setQuestionimg(String questionimg) {
		this.questionimg = questionimg;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}
	
	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getSolution() {
		return solution;
	}

	public void setSolution(String solution) {
		this.solution = solution;
	}

}
