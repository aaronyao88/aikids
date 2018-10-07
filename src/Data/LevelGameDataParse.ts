//关卡数据解析
class LevelGameDataParse {
	public static parseLevelGameData(val:any)
	{
		GameData.stepNum = val.step;
		GameData.levelStepNum= val.step;
		GameData.elementTypes = val.element;
		GameData.levelBackgroundImageName = val.levelbgimg;
		LevelGameDataParse.parseLevelReq(val.levelreq);
	}

	private static parseLevelReq(val:any)
	{
		GameData.levelreq.openChange();//清空原有数据
		var len:number= val.length;
		for (var i=0; i<len; i++)
		{
			GameData.levelreq.addElement(val[i].type,val[i].num);
		}
	}
}