class GameSetting extends eui.Component implements  eui.UIComponent {
	
	private static shared:GameSetting;

	public gp_music:eui.Group;
	public btn_music:eui.Button;           // 音乐按钮
	public btn_music_disable:eui.Image;    //音乐静音显示
	public gp_effect:eui.Group;
	public btn_effect:eui.Button;            //效果按钮
	public btn_effect_disable:eui.Image;    //效果静音显示
	public btn_confirm:eui.Button;   //确定按钮


	public static getInstance(){
		if(!GameSetting.shared){
			GameSetting.shared=new GameSetting();
		}
		return GameSetting.shared;

	}
	
	
	
	public constructor() {
		super();
	
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

	private init(){
		this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickConfirm,this);
		this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickMusic,this);
		this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickEffect,this);
		this.update_buttonstate();
	}

	private clickConfirm(){
		SoundManager.getInstance().playClick();
		this.parent.removeChild(this);
		

	}

	private clickMusic(){
		SoundManager.getInstance().playClick();
		SoundManager.getInstance().isMusic = !SoundManager.getInstance().isMusic;
		this.update_buttonstate();

	}

	private clickEffect(){
		SoundManager.getInstance().playClick();
		SoundManager.getInstance().isEffect=!SoundManager.getInstance().isEffect;
		this.update_buttonstate();

	}

	private update_buttonstate(){
		this.btn_effect_disable.visible = !SoundManager.getInstance().isEffect;
		this.btn_music_disable.visible = !SoundManager.getInstance().isMusic;

	}


	
}