class rotationDroplistButton extends droplistButton {
	public btnType: string = "rotate";


	public constructor(roleArray?) {
		super(roleArray);
		this.skinName = "resource/component/rotationDroplistButton.exml";
	}

	protected init() {
		super.init();
		//列表
		var moveArray=[{"name":"左","value":"左"},{"name":"右","value":"右"}];
		this.moveList = this.createList(moveArray);
	}

	protected moveListOnChange(evt: egret.Event) {
		this.selectNumberBtn.label = this.moveList.selectedItem.name;
		this.direction = this.moveList.selectedItem.value;
		this.setMoveList(false);
	}
}

window["rotationDroplistButton"] = rotationDroplistButton;