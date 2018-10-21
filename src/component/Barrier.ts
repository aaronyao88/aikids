class Barrier extends eui.Component implements  eui.UIComponent {
	public type:string="wall";
	public rect:eui.Rect;
	public txt:eui.Label;
	public barrier_id:number;
	public pair_id:number;



	public constructor(type:string,id:number,pair_id?:number) {
		super();
		this.type=type;
		this.barrier_id=id;
		if(pair_id)
		{
			this.pair_id=pair_id;
		}
		this.skinName = "resource/component/Barrier.exml";

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
		switch (this.type) {
			case "wall":
				this.rect.fillColor = 0x0f00ff;
				this.txt.text="墙";
				break;
			case "hole":
				this.rect.fillColor = 0x000000;
				this.txt.text="坑";
				break;
			case "box":
				this.rect.fillColor = 0x5B3535;
				this.rect.width=130;
				this.rect.height=130;
				this.txt.text="箱";
				break;
			case "tornado":
				this.rect.fillColor = 0x31382A;
				this.txt.text="风";		
				break;	
			case "tornadoBtn":
				this.rect.fillColor = 0x2177ED;
				this.txt.text="开关";		
				break;	
			default:
				this.rect.fillColor = 0x0f00ff;
				this.txt.text="墙";

		}
	}

	
}

window["Barrier"] = Barrier;