class MapDataPares {
	


	public static createMapData(val:number[]):void
	{
		var len:number = val.length;
		GameData.unmapnum = len;

		var index:number =0;
		for(var i =0; i<len  ;i++)
		{
			index = val[i];
			var row:number = Math.floor(index/GameData.maxRow);
			var col:number= index % GameData.maxColumn;
			GameData.mapData[row][col] = -1;

		}
		//可用数据数量
		GameData.currentElementNum = GameData.maxRow * GameData.maxColumn - len;

	}



}