export class Qns
{
     question:string
     questionimg:string
     option1:string
     option2:string
     option3:string
     option4:string
     solution:string
     level:string
    constructor(question:string,questionimg:string,option1:string,option2:string,option3:string,option4:string,solution:string,level:string)
    { 
        this.question=question;
        this.questionimg=questionimg;
        this.option1=option1
        this.option2=option2
        this.option3=option3
        this.option4=option4
        this.solution=solution
        this.level=level
     }
}