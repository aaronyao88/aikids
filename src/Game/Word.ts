class Word extends eui.Component implements  eui.UIComponent {
	public lb_text:eui.Label;

	public constructor() {
		super();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_tap,this);
	}

	protected onclick_tap(){
        SceneGame.getInstance().onclick_word(this);
    }

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public setWordText(value:string){
		this.lb_text.text=value;
	}

	public getWordText():string{
		return this.lb_text.text;
	}
	
}

//自定义嵌套eui需要挂在到 window 对象
window["Word"] = Word;