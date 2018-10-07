class MapControl {
	public constructor() {
	}


	//创建全地图元素，初速化元素
	public createElementAllMap()
	{
		this.createAllMap();

	}

	private createAllMap()
	{
		var len:number = GameData.maxRow * GameData.maxColumn;
		var type:string = "";
		var havelink:boolean = true;
		var id:number =0;
		var ztype:string ="";
		var htype:string="";

		for(var i =0; i<GameData.maxRow;i++){
			for (var t=0; t<GameData.maxColumn;t++)
			{
				type =  this.createType();
				if(i>1 && GameData.mapData[i-1][t]!=-1 &&GameData.mapData[i-2][t] !=-1)
				{
					ztype= GameData.elements[GameData.mapData[i-1][t]].type;
				}
				
			}
		}
	}

	private createType():string{
		var num:number = Math.floor(Math.random()* GameData.elementTypes.length);
		return GameData.elementTypes[num].toString();

	}
}