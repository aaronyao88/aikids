class MoveForward extends eui.Button{
	public btnID:number;
	public btnType:string = "move";
	public line:egret.Shape;

	
	public constructor() {
		super();
		this.skinName = "resource/game/MoveForward.exml";
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
		this.line = new egret.Shape();
		this.line.graphics.lineStyle(5, 0xff00ff); 
		this.line.graphics.moveTo( 72,0 );
        this.line.graphics.lineTo( 72, 72 );
        this.line.graphics.endFill();
		this.addChild(this.line);
		this.line.visible = false;
		
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

window["MoveForward"] = MoveForward;