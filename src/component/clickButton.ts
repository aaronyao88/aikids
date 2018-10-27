class clickButton extends droplistButton {
	public btnType: string = "click";



	public constructor(roleArray?) {
		super(roleArray);
		this.roleArray = [{ "name": "飞飞", "value": "bird" }];
		this.skinName = "resource/component/clickButton.exml";
	}



}

window["clickButton"] = clickButton;