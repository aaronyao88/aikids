class droplistButton extends eui.Component implements eui.UIComponent {

	public selectNumberBtn: eui.Button;     //步数选择按钮
	public selectRoleBtn: eui.Button;     //角色选择按钮
	public moveList: eui.List =new eui.List();  //步数选择下拉列表
	public roleList:eui.List = new eui.List() ; // 角色下拉列表
	public roleArray; //角色列表
	public line: egret.Shape;
	public isEdit: boolean = false;  //步数选择按钮是否可以点击
	public isOnStage: boolean = false;
	public btnID: number;
	public btnType: string = "move";
	//读取的变量
	public moveNumber: number = 1;
	public direction: string = "右";
	public roleIndex:number = 0;
	

	public constructor(roleArray?) {
		super();
		if(roleArray)
		{
			this.roleArray = roleArray;
		}else
		{
			this.roleArray = ["佩奇"];
		}
		
		this.skinName = "resource/component/droplistButton.exml";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	protected init() {
		
		//列表
		var moveArray=["1", "3", "2", "4", "5"];
		this.moveList = this.createList(moveArray);
		this.roleList = this.createList(this.roleArray);
		
		//设置角色
		if(this.roleArray)
		{
			this.selectRoleBtn.label=this.roleArray[this.roleIndex];
		}
		//划线
		this.initLine();
	}

	protected createList(arrayList)
	{
		var list = new eui.List();
		list.dataProvider = new eui.ArrayCollection(arrayList);
		list.x=0;
		list.y=50;
		list.width = this.width;
		list.selectedIndex = 0;
		return list;
		
	}



	protected initLine() {

		this.line = new egret.Shape();
		this.line.graphics.lineStyle(5, 0xff00ff);
		this.line.graphics.moveTo(this.width, 0);
		this.line.graphics.lineTo(this.width, this.height);
		this.line.graphics.endFill();
		this.addChild(this.line);
		this.line.visible = false;
	}

	protected moveListOnChange(evt: egret.Event) {
		this.selectNumberBtn.label = this.moveList.selectedItem;
		this.moveNumber = this.moveList.selectedItem;
		this.isOnStage = false;
		this.removeChild(this.moveList);
	}

	protected roleListOnChange(evt: egret.Event) {
		this.selectRoleBtn.label = this.roleList.selectedItem;
		this.roleIndex = this.roleList.selectedIndex;
		this.isOnStage = false;
		this.removeChild(this.roleList);
	}

	protected moveListTouchTap(evt: egret.Event) {
		if (this.isOnStage) {
			this.removeChild(this.moveList);
			this.isOnStage = false;
		} else {
			this.addChild(this.moveList);
			this.moveList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.moveListOnChange, this);
			this.isOnStage = true;
		}

	}

	protected roleListTouchTap(evt: egret.Event) {
		if (this.isOnStage) {
			this.removeChild(this.roleList);
			this.isOnStage = false;
		} else {
			this.addChild(this.roleList);
			this.roleList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.roleListOnChange, this);
			this.isOnStage = true;
		}

	}

	public setEdit(val: boolean) {
		if (val) {
			this.isEdit = true;
			this.selectNumberBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.moveListTouchTap, this);
			this.selectRoleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.roleListTouchTap, this);
		} else {
			this.isEdit = false;
			this.selectNumberBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.moveListTouchTap, this);
			this.selectRoleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.roleListTouchTap, this);

		}

	}

	public isHit(obj2: egret.DisplayObject) {
		var rect1: egret.Rectangle = this.getBounds(); // 按钮本身的边界
		var rect2: egret.Rectangle = obj2.getBounds(); //被撞击物的边界
		rect1.x = this.x;
		rect1.y = this.y;
		rect2.x = obj2.x;
		rect2.y = obj2.y;
		// console.log(rect1);
		// console.log(rect2);
		return rect2.intersects(rect1);
	}

}

window["droplistButton"] = droplistButton;