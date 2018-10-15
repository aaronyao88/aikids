class Role extends eui.Component {
	public name:string;
	public type:string;
	public x:number;
	public y:number;
	public displayObject:egret.MovieClip;
	public actionFlag:number = 0;	  /**MC执行的当前动作索引**/
	
	public constructor(name,type,x,y) {
		super();
		this.name=name;
		this.x=x;
		this.y=y;
		this.type=type;
		//准备mc
		var data = RES.getRes("renwu_json");
		var txtr = RES.getRes("renwu_png");
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
		this.displayObject = new egret.MovieClip(mcFactory.generateMovieClipData("walk"));
		this.displayObject.anchorOffsetX = this.displayObject.width / 2;
		this.displayObject.anchorOffsetY = this.displayObject.height / 2;
		this.displayObject.x = this.x * 144 - 144 / 1.5;
		this.displayObject.y = this.y * 144 - 144 / 2;
		this.displayObject.scaleX = 1.2;
		this.displayObject.scaleY = 1.2;
		this.displayObject.gotoAndStop("right");
	}



}