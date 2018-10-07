// TypeScript file
class SoundManager {

    //控制音乐播放
    private soundChannel:egret.SoundChannel;

    private bg_sound:egret.Sound;
    private click_sound:egret.Sound;
    private tapWord_sound:egret.Sound;
    private right_sound:egret.Sound;
    private wrong_sound:egret.Sound;
    private run_sound:egret.Sound;
    private rotation_sound:egret.Sound;


    private static shared:SoundManager;

    public static getInstance(){
        if(!SoundManager.shared){
            SoundManager.shared = new SoundManager();
        }
        return SoundManager.shared;
    }


    public constructor(){
        this.bg_sound= new egret.Sound();
        this.bg_sound.load("https://www.aikids.club/wxgame/cydtz/sound/Music.mp3");
        this.bg_sound.addEventListener(egret.Event.COMPLETE,this.playBgMusic,this);
        

        this.click_sound=new egret.Sound();
        this.click_sound.load("resource/assets/sound/buttonclick.mp3");

        this.tapWord_sound=new egret.Sound();
        this.tapWord_sound.load("resource/assets/sound/type_word.mp3");

        this.right_sound=new egret.Sound();
        this.right_sound.load("resource/assets/sound/right.mp3");

        this.wrong_sound=new egret.Sound();
        this.wrong_sound.load("resource/assets/sound/wrong.mp3");

        this.run_sound = new egret.Sound();
        this.run_sound.load("resource/assets/sound/run.mp3");

        this.rotation_sound = new egret.Sound();
        this.rotation_sound.load("resource/assets/sound/rotation.mp3");

        
    }

    //播放背景音乐
    public playBgMusic(){
        if(this.bg_sound && this.isMusic)
        {
            this.soundChannel=this.bg_sound.play(0,0);
        }

    }

    //停止背景音乐
    public stopBgMusic(){
        if(this.soundChannel){
            this.soundChannel.stop();
        }

    }

    //播放点击按钮音乐
    public playClick(){
        if(this.click_sound && this.isEffect){
            this.click_sound.play(0,1);
        }

    }

    //播放点击文字音效
    public playTapWord(){
        if(this.tapWord_sound && this.isEffect){
            this.tapWord_sound.play(0,1);
        }

    }

    //跑步声音
    public playRunSound(){
         if(this.run_sound && this.isEffect){
            this.run_sound.play(0,1);
        }       
    }

    //旋转声音
    public playRotationSound(){
         if(this.rotation_sound && this.isEffect){
            this.rotation_sound.play(0,1);
        }       
    }

    //设置是否播放背景音乐
    public set isMusic(val){
        if(val){
            egret.localStorage.setItem("isMusic","1");
            this.playBgMusic();
        }else{
            egret.localStorage.setItem("isMusic","0");
            this.stopBgMusic();
        }

    }

    public get isMusic(){
        let ret = egret.localStorage.getItem("isMusic");
        if(ret==null || ret == ""){
            return true;
        }else{
            return ret=="1";
        }
    }

    public set isEffect(val){
        if(val){
            egret.localStorage.setItem("isEffect","1");
        }else
        {
            egret.localStorage.setItem("isEffect","0");
        }
    }

    public get isEffect(){
        let ret =egret.localStorage.getItem("isEffect");
        if(ret==null || ret == ""){
            return true;
        }else{
            return ret == "1";
        }
    }

    public playRight(){
        if(this.isEffect){
            this.right_sound.play(0,1);
        }
    }

    public playWrong(){
        if(this.isEffect){
            this.wrong_sound.play(0,1);
        }
    }


    
}