class clickButton extends droplistButton {
	public btnType: string = "click";
	
	public constructor(roleArray?) {
		super(roleArray);
		this.skinName = "resource/component/clickButton.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}