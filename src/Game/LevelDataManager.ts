class LevelDataItem{
	public answer:string;
	public img:string;
	public word:string;
	public tip:string;
	public content:string;
}


class LevelDataManager {


	private static shared:LevelDataManager;

	public static getInstance(){
		if(!LevelDataManager.shared){
			LevelDataManager.shared = new LevelDataManager();
		}

		return LevelDataManager.shared;
	}

	//数组，保存所有关卡的数据
	private items:LevelDataItem[] = [];

	//总关卡数
	public totalLevels:number;

	public constructor(){
		this.items = RES.getRes("questions_json");
	}

	public GetLevel(level:number):LevelDataItem{
		if(level<=0) level=0;
		if(level >= this.items.length) level = this.items.length -1;
		return this.items[level];
	}

	public get Milestone():number{
		var milestone = egret.localStorage.getItem("CODE_milestone");
		if(milestone=="" || milestone ==  null ){
			milestone = "1"
		}
		return parseInt(milestone);
	}

	public set Milestone(value:number){
		egret.localStorage.setItem("CODE_milestone",value.toString());
	}



}