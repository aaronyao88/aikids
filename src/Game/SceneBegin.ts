class SceneBegin extends eui.Component implements  eui.UIComponent {
	
	public btn_begin:eui.Button;
	public btn_setting:eui.Button;
	private static shared:SceneBegin;


   public static getInstance(){
	   if(!SceneBegin.shared){
		   SceneBegin.shared=new SceneBegin();
	   }
	   return SceneBegin.shared;
   }


	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	// 组件加载完毕之后调用该函数
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init(){
		SoundManager.getInstance();
		this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.beginTap,this);
		this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.beginSetting,this);
		
	}

	private beginTap(){
		SoundManager.getInstance().playClick();
		this.parent.addChild(SceneLevel.getInstance());
		this.parent.removeChild(this);

	}

	//打开设置界面
	private beginSetting(){
		SoundManager.getInstance().playClick();
		this.addChild(GameSetting.getInstance());


	}


	
}