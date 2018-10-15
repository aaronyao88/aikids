class pushDroplistButton extends droplistButton {
	public btnType:string = "push";
	
	public constructor(roleArray?) {
		super(roleArray);
		this.skinName = "resource/component/pushDroplistButton.exml";
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	
}