class GameData {

	public static unmapnum:number = 0 ; //空白地图块的数量
	public static mapData:number[][]; //地图数据
	public static stepNum:number = 0;  //当前剩余步数
	public static levelStepNum:number =0 ; //当前关卡要求的步数
	public static elementTypes:number[]; //当前关卡出现的元素类型
	public static levelreq:LevelRequire; //过关条件
	public static elements:GameElement[]; //游戏元素的对象池 8*8 =64个
	public static unusedElements:number[];//游戏中未使用的元素的ID
	public static levelBackgroundImageName:string = "";//当前关卡的背景图
	
	public static maxRow:number =8 ; //行数
	public static maxColumn:number =8; //列数
	public static currentElementNum:number =0;  //当前关卡中地图可用元素数量


	public static stageW:number =0; //舞台宽度
	public static stageH:number=0;  //舞台高度

	//初始化数据
	public static initData()
	{
		//创建地图数据
		GameData.mapData = [];
		for(var i=0; i<GameData.maxRow;i++)
		{
			var arr:number[]=[];
			for(var j=0; j<GameData.maxColumn; j++)
			{
				GameData.mapData[j].push(-2);  //-2表示可以使用 -1表示不可用
			}
			
		}

		//创建关卡
		GameData.levelreq = new LevelRequire();
	
		//游戏中的游戏元素
		GameData.elements = [];
		GameData.unusedElements = [];
		var len:number = GameData.maxRow * GameData.maxColumn;
		for (var q =0 ; q<len; q++){
			var ele:GameElement = new GameElement();
			ele.id =q;
			GameData.elements.push(ele);
			GameData.unusedElements.push(q);

		}

		GameData.stageW = egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight;

	
	}

}