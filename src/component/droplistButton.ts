class droplistButton extends eui.Component implements  eui.UIComponent {
	
	public list:eui.List;  //步数选择下拉列表
	public selectNumberBtn:eui.Button;     //步数选择按钮
	public isEdit:boolean = false;  //步数选择按钮是否可以点击

	public btnID:number;
	public btnType:string = "move";
	public line:egret.Shape;

	public constructor() {
		super();
		this.skinName = "resource/component/droplistButton.exml";
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

	private init()
	{
		//列表
        var list =new eui.List();
        list.dataProvider = new eui.ArrayCollection(["1","2","3","4","5"]);//设计列表的index数以及每一项的内容
        list.x = 0;
        list.y=50;
		list.width=150;
        list.visible = false;
        list.selectedIndex=0;
		this.list=list;
		this.addChild(this.list);
	    this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);
		
		//划线
		this.line = new egret.Shape();
		this.line.graphics.lineStyle(5, 0xff00ff); 
		this.line.graphics.moveTo( this.width,0 );
        this.line.graphics.lineTo( this.width, this.height );
        this.line.graphics.endFill();
		this.addChild(this.line);
		this.line.visible = false;
	}

	private onChange(evt:egret.Event)
	{
		this.selectNumberBtn.label =  this.list.selectedItem;
		this.list.visible=false;
	}

	private touch_tap(evt:egret.Event)
    {
        this.list.visible = !this.list.visible;
		console.log("this.list.visible:"+this.list.visible);

    }

	public setEdit(val:boolean)
	{
		if(val)
		{
			this.isEdit =true;

			//添加步数按钮
			this.selectNumberBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch_tap,this);
		}else
		{
			this.isEdit =false;
			//添加步数按钮
			this.selectNumberBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch_tap,this);

		}
		
	}

	public isHit(obj2:egret.DisplayObject){
			var rect1:egret.Rectangle = this.getBounds(); // 按钮本身的边界
			var rect2:egret.Rectangle = obj2.getBounds(); //被撞击物的边界
			rect1.x=this.x;
			rect1.y=this.y;
			rect2.x=obj2.x;
			rect2.y=obj2.y;
			// console.log(rect1);
			// console.log(rect2);
			return rect2.intersects(rect1);
	}
	
}

window["droplistButton"] = droplistButton;