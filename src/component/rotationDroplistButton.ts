class rotationDroplistButton extends droplistButton {
	public btnType: string = "rotate";


	public constructor(roleArray?) {
		super(roleArray);
		this.skinName = "resource/component/rotationDroplistButton.exml";
	}

	protected init() {
		super.init();
		//列表
		var moveArray=["左", "右"];
		this.moveList = this.createList(moveArray);
	}

	protected moveListOnChange(evt: egret.Event) {
		this.selectNumberBtn.label = this.moveList.selectedItem;
		this.direction = this.moveList.selectedItem;
		this.isOnStage = false;
		this.removeChild(this.moveList);
	}
}

window["rotationDroplistButton"] = rotationDroplistButton;