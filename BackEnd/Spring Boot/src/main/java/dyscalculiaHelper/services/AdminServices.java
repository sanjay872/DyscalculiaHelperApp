package dyscalculiaHelper.services;


import dyscalculiaHelper.request.AdminRequest;

public interface AdminServices {
	void newAddQuestion(AdminRequest req);
	void newSubQuestion(AdminRequest req);
	void newMulQuestion(AdminRequest req);
	void newMixQuestion(AdminRequest req);
}
