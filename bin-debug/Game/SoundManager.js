var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var SoundManager = (function () {
    function SoundManager() {
        this.bg_sound = new egret.Sound();
        this.bg_sound.load("https://www.aikids.club/wxgame/cydtz/sound/Music.mp3");
        this.bg_sound.addEventListener(egret.Event.COMPLETE, this.playBgMusic, this);
        this.click_sound = new egret.Sound();
        this.click_sound.load("resource/assets/sound/buttonclick.mp3");
        this.tapWord_sound = new egret.Sound();
        this.tapWord_sound.load("resource/assets/sound/type_word.mp3");
        this.right_sound = new egret.Sound();
        this.right_sound.load("resource/assets/sound/right.mp3");
        this.wrong_sound = new egret.Sound();
        this.wrong_sound.load("resource/assets/sound/wrong.mp3");
        this.run_sound = new egret.Sound();
        this.run_sound.load("resource/assets/sound/run.mp3");
        this.rotation_sound = new egret.Sound();
        this.rotation_sound.load("resource/assets/sound/rotation.mp3");
    }
    SoundManager.getInstance = function () {
        if (!SoundManager.shared) {
            SoundManager.shared = new SoundManager();
        }
        return SoundManager.shared;
    };
    //播放背景音乐
    SoundManager.prototype.playBgMusic = function () {
        if (this.bg_sound && this.isMusic) {
            this.soundChannel = this.bg_sound.play(0, 0);
        }
    };
    //停止背景音乐
    SoundManager.prototype.stopBgMusic = function () {
        if (this.soundChannel) {
            this.soundChannel.stop();
        }
    };
    //播放点击按钮音乐
    SoundManager.prototype.playClick = function () {
        if (this.click_sound && this.isEffect) {
            this.click_sound.play(0, 1);
        }
    };
    //播放点击文字音效
    SoundManager.prototype.playTapWord = function () {
        if (this.tapWord_sound && this.isEffect) {
            this.tapWord_sound.play(0, 1);
        }
    };
    //跑步声音
    SoundManager.prototype.playRunSound = function (num) {
        if (this.run_sound && this.isEffect) {
            this.run_sound.play(0, num);
        }
    };
    //旋转声音
    SoundManager.prototype.playRotationSound = function () {
        if (this.rotation_sound && this.isEffect) {
            this.rotation_sound.play(0, 1);
        }
    };
    Object.defineProperty(SoundManager.prototype, "isMusic", {
        get: function () {
            var ret = egret.localStorage.getItem("isMusic");
            if (ret == null || ret == "") {
                return true;
            }
            else {
                return ret == "1";
            }
        },
        //设置是否播放背景音乐
        set: function (val) {
            if (val) {
                egret.localStorage.setItem("isMusic", "1");
                this.playBgMusic();
            }
            else {
                egret.localStorage.setItem("isMusic", "0");
                this.stopBgMusic();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "isEffect", {
        get: function () {
            var ret = egret.localStorage.getItem("isEffect");
            if (ret == null || ret == "") {
                return true;
            }
            else {
                return ret == "1";
            }
        },
        set: function (val) {
            if (val) {
                egret.localStorage.setItem("isEffect", "1");
            }
            else {
                egret.localStorage.setItem("isEffect", "0");
            }
        },
        enumerable: true,
        configurable: true
    });
    SoundManager.prototype.playRight = function () {
        if (this.isEffect) {
            this.right_sound.play(0, 1);
        }
    };
    SoundManager.prototype.playWrong = function () {
        if (this.isEffect) {
            this.wrong_sound.play(0, 1);
        }
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManager.js.map