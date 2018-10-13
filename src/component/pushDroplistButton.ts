class pushDroplistButton extends droplistButton {
	public btnType:string = "push";
	
	public constructor() {
		super();
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

	protected init(){
		//划线
		this.initLine();
	}
	
}