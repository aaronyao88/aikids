class SceneGame extends eui.Component implements  eui.UIComponent {


	public btn_back:eui.Button;

    //对象变量
    private group_answer:eui.Group;
    private group_words: eui.Group;
    private img_question: eui.Image;
    private levelIndex:number;

	private static shared: SceneGame;

	//成功界面变量
	public group_win:eui.Group;
	public btn_next:eui.Button;
	public lb_explain:eui.Label;
	public lb_from:eui.Label;

    public static getInstance() {
		if(SceneGame.shared == null){
			SceneGame.shared= new SceneGame();
		}
		return SceneGame.shared;
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

	protected init(){
		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_back,this);
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_next,this);
		SoundManager.getInstance();
	}

	protected onclick_back(){
		SoundManager.getInstance().playClick();
		this.parent.addChild(SceneLevel.getInstance());
		this.parent.removeChild(this);
	}

	//初始化关卡
    public InitLevel(level:number){
        this.levelIndex = level;
        var leveldata = LevelDataManager.getInstance().GetLevel(level);
		//将字段接起来
   		var words = leveldata.answer + leveldata.word;
		//混入其他字
		if(words.length==10){
			var i = Math.floor(Math.random() * 400);
			if(i!=level){
				var temp = LevelDataManager.getInstance().GetLevel(i);
				words += temp.word + temp.answer;
			}
    	}
		//对字段重排
		var wordlist:string[]=[];
		for(var i =0 ;i<words.length;i++){
			wordlist.push(words.charAt(i));
		}
		wordlist = this.randomlist(wordlist);

		//赋值
		for(var i=0; i<this.group_words.numElements;i++){
			var wordrect = <Word> this.group_words.getChildAt(i);
			wordrect.setWordText(wordlist[i]);
			wordrect.visible=true;
		}
		//重置一些状态
		for(var i = 0;i<this.group_answer.numElements;i++){
			var answerrect = <AnswerWord>this.group_answer.getChildAt(i);
			answerrect.SetSelectWord(null);
			answerrect.visible = true;
			answerrect.SelectWord = null;
		}

		this.group_win.visible = false;

		RES.getResByUrl(leveldata.img,function(texture:egret.Texture){
			console.log(texture);
			this.img_question.texture = texture;
		},this,RES.ResourceItem.TYPE_IMAGE);

		

	
		

    }

		//将一个数列随机
	private randomlist(arr: any[]): any[] {
		var array = [];
		while(arr.length > 0) {
			var i = Math.floor(Math.random() * arr.length);
			
			array.push(arr[i]);
			arr.splice(i,1);
		}
		return array;
	}	

	//当字点击的时候，由word类抛出
	public onclick_word(word: Word){
		SoundManager.getInstance().playClick();
		//找到一个合适的位置添加进答案内容
		var sel:AnswerWord = null;
		for(var i = 0;i<this.group_answer.numChildren;i++){
			var answer = <AnswerWord>this.group_answer.getChildAt(i);
			if(answer.SelectWord == null){
				sel = answer;
				
				break;
			}
		}
		//当有一个合适的位置的时候就会将字填充，并判断是否胜利
		if(sel != null){
			sel.SetSelectWord(word);
			//判断是否胜利
			var check_str:string = "";
			for(var i = 0;i < this.group_answer.numChildren;i++) {
				var answer = <AnswerWord>this.group_answer.getChildAt(i);
				check_str += answer.getWordText();
			}
			if(check_str == LevelDataManager.getInstance().GetLevel(this.levelIndex).answer){
				//胜利
				console.log("win");
				this.showWin();
			}else{

				if(check_str.length==4){
					SoundManager.getInstance().playWrong();
				}
			}
		}
	}

	private showWin(){
		this.group_win.visible = true;
		var leveldata = LevelDataManager.getInstance().GetLevel(this.levelIndex);
		this.lb_from.text = leveldata.tip;
		this.lb_explain.text = leveldata.content;

		SoundManager.getInstance().playRight();

		//解锁下一关
		SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);
		console.log(this.levelIndex);
	}

	private onclick_next(){
		SoundManager.getInstance().playClick();
		//下一个题目
		this.group_win.visible = false;
		SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);
		this.InitLevel(this.levelIndex + 1);
		console.log(this.levelIndex);
		
	}
	
}