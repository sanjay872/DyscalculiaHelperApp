export class testResults
{
    userId:string;
    section:string;
    level:string;
    score:number;
    time:number;
    constructor(userId:string,section:string,level:string,score:number,time:number)
    {
        this.userId=userId
        this.section=section
        this.level=level
        this.score=score
        this.time=time
    }
}