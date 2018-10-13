class droplistButton extends eui.Component implements  eui.UIComponent {
	
	public list:eui.List;  //步数选择下拉列表
	public selectNumberBtn:eui.Button;     //步数选择按钮
	public isEdit:boolean = false;  //步数选择按钮是否可以点击
	public isOnStage:boolean=false;
	public moveNumber:number = 1;
	public direction:string ="右";

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

	protected init()
	{
		//列表
        var list =new eui.List();
        list.dataProvider = new eui.ArrayCollection(["1","3","2","4","5"]);//设计列表的index数以及每一项的内容
        list.x = 0;
        list.y=50;
		list.width=150;
        list.selectedIndex=0;
		this.list=list;

		//划线
		this.initLine();

	}

	protected initLine()
	{
		
		this.line = new egret.Shape();
		this.line.graphics.lineStyle(5, 0xff00ff); 
		this.line.graphics.moveTo( this.width,0 );
        this.line.graphics.lineTo( this.width, this.height );
        this.line.graphics.endFill();
		this.addChild(this.line);
		this.line.visible = false;
	}

	protected onChange(evt:egret.Event)
	{
		this.selectNumberBtn.label =  this.list.selectedItem;
		this.moveNumber =  this.list.selectedItem;
		this.isOnStage = false;
		this.removeChild(this.list);
	}

	private touch_tap(evt:egret.Event)
    {
        if(this.isOnStage)
		{
			this.removeChild(this.list);
			this.isOnStage = false;
		}else
		{
			this.addChild(this.list);
			 this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);
			this.isOnStage  = true;
		}

    }

	public setEdit(val:boolean)
	{
		if(val)
		{
			this.isEdit =true;	
			this.selectNumberBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch_tap,this);
		}else
		{
			this.isEdit =false;
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