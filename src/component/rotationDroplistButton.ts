class rotationDroplistButton extends droplistButton {
	public btnType:string = "rotate";


	public constructor() {
		super();
		this.skinName = "resource/component/rotationDroplistButton.exml";
	}

	protected init()
	{
		//列表
        var list =new eui.List();
        list.dataProvider = new eui.ArrayCollection(["左","右"]);//设计列表的index数以及每一项的内容
        list.x = 0;
        list.y=50;
		list.width=150;
        list.selectedIndex=0;
		this.list=list;

		//划线
		this.initLine();
	}

	protected onChange(evt:egret.Event)
	{
		this.selectNumberBtn.label =  this.list.selectedItem;
		this.direction =  this.list.selectedItem;
		this.isOnStage = false;
		this.removeChild(this.list);
	}
}

window["rotationDroplistButton"] = rotationDroplistButton;