// 关卡数据
class LevelRequire {
    
    public reqElements:LevelRequireElement[];
    
    public constructor(){
        this.reqElements =[];
    }

    //获取过关条件的数量
    public getLevelReqNum():number{
        return this.reqElements.length;
    }

    //添加关卡元素
    public addElement(type:string,num:number)
    {
        var element:LevelRequireElement = new LevelRequireElement();
        element.type = type;
        element.num= num;
        this.reqElements.push(element);

    }

    //启动关卡条件修改
    public openChange()
    {
        this.reqElements = [];
    }

    //减少关卡中元素数量
    public changedReqNum(type:string,num:number)
    {
        var l:number =this.getLevelReqNum();
        for(var i=0; i<l; i++)
        {
            if(this.reqElements[i].type == type)
            {
                this.reqElements[i].num -= num;
                return;
            }
        }
    }

    //判断是否通关
    public isClear():boolean
    {
        var l:number = this.getLevelReqNum();
        for(var i=0; i<l; i++)
        {
            if(this.reqElements[i].num>0)
            {
                return false;
            }
        }
        return true;
    }
    
}