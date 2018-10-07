class LevelIcon extends eui.Button{
	
	public lb_level:eui.Label;


	
	public constructor() {
		super();
		this.skinName = "resource/game/LevelIcon.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

    public get Level():number{
        return parseInt(this.lb_level.text);
    }

    public set Level(value:number){
        this.lb_level.text = value.toString();
    }
	
}