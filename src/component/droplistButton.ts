class droplistButton extends eui.Component implements eui.UIComponent {

	public selectNumberBtn: eui.Button;     //步数选择按钮
	public selectRoleBtn: eui.Button;     //角色选择按钮
	public moveList: eui.List = new eui.List();  //步数选择下拉列表
	public roleList: eui.List = new eui.List(); // 角色下拉列表
	public roleArray; //角色列表
	public line: egret.Shape;
	public isEdit: boolean = false;  //步数选择按钮是否可以点击
	public isOnStage: boolean = false;
	public isMoveListOnStage: boolean = false;
	public isRoleListOnStage: boolean = false;
	public btnID: number;
	public btnType: string = "move";
	//读取的变量
	public moveNumber: number = 1;
	public direction: string = "右";
	public selectedRoleType: string;


	public constructor(roleArray?) {
		super();
		if (roleArray) {
			this.roleArray = roleArray;
		} else {
			this.roleArray = [{ "name": "佩奇", "value": "lead" }];
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
		var moveArray = [{ "name": "1", "value": 1 }, { "name": "2", "value": 2 }, { "name": "3", "value": 3 }, { "name": "4", "value": 4 }, { "name": "5", "value": 5 }];
		this.moveList = this.createList(moveArray);
		this.roleList = this.createList(this.roleArray);

		//设置角色
		if (this.roleArray) {
			this.selectRoleBtn.label = this.roleArray[0].name;
			this.selectedRoleType = this.roleArray[0].value;
		}
		//划线
		this.initLine();
	}

	protected createList(arrayList) {
		var list = new eui.List();
		list.dataProvider = new eui.ArrayCollection(arrayList);
		list.x = 0;
		list.y = 50;
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
		this.selectNumberBtn.label = this.moveList.selectedItem.name;
		this.moveNumber = this.moveList.selectedItem.value;
		this.setMoveList(false);
	}


	protected moveListTouchTap(evt: egret.Event) {
		if (this.isMoveListOnStage) {
			this.setMoveList(false);
		} else {
			this.removeList();
			this.setMoveList(true);
			this.moveList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.moveListOnChange, this);
		}

	}

	protected roleListOnChange(evt: egret.Event) {
		this.selectRoleBtn.label = this.roleList.selectedItem.name;
		this.selectedRoleType = this.roleList.selectedItem.value;
		this.setRoleList(false);
	}


	protected roleListTouchTap(evt: egret.Event) {
		if (this.isRoleListOnStage) {
			this.setRoleList(false);
		} else {
			this.removeList();
			this.setRoleList(true);
			this.roleList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.roleListOnChange, this);
		}

	}

	protected removeList() {
		if (this.isMoveListOnStage) {
			this.setMoveList(false);
		}
		if (this.isRoleListOnStage) {
			this.setRoleList(false);
		}
	}

	protected setMoveList(result:boolean)
	{
		if(result)
		{
			this.addChild(this.moveList);
			this.isOnStage = true;
			this.isMoveListOnStage = true;
		}else
		{
			this.removeChild(this.moveList);
			this.isOnStage = false;
			this.isMoveListOnStage = false;			
		}
	}
	protected setRoleList(result:boolean)
	{
		if(result)
		{
			this.addChild(this.roleList);
			this.isOnStage = true;
			this.isRoleListOnStage = true;
		}else
		{
			this.removeChild(this.roleList);
			this.isOnStage = false;
			this.isRoleListOnStage = false;			
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