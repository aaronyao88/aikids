var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneGame = (function (_super) {
    __extends(SceneGame, _super);
    function SceneGame() {
        return _super.call(this) || this;
    }
    SceneGame.getInstance = function () {
        if (SceneGame.shared == null) {
            SceneGame.shared = new SceneGame();
        }
        return SceneGame.shared;
    };
    SceneGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SceneGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    SceneGame.prototype.init = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_back, this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_next, this);
        SoundManager.getInstance();
    };
    SceneGame.prototype.onclick_back = function () {
        SoundManager.getInstance().playClick();
        this.parent.addChild(SceneLevel.getInstance());
        this.parent.removeChild(this);
    };
    //初始化关卡
    SceneGame.prototype.InitLevel = function (level) {
        this.levelIndex = level;
        var leveldata = LevelDataManager.getInstance().GetLevel(level);
        //将字段接起来
        var words = leveldata.answer + leveldata.word;
        //混入其他字
        if (words.length == 10) {
            var i = Math.floor(Math.random() * 400);
            if (i != level) {
                var temp = LevelDataManager.getInstance().GetLevel(i);
                words += temp.word + temp.answer;
            }
        }
        //对字段重排
        var wordlist = [];
        for (var i = 0; i < words.length; i++) {
            wordlist.push(words.charAt(i));
        }
        wordlist = this.randomlist(wordlist);
        //赋值
        for (var i = 0; i < this.group_words.numElements; i++) {
            var wordrect = this.group_words.getChildAt(i);
            wordrect.setWordText(wordlist[i]);
            wordrect.visible = true;
        }
        //重置一些状态
        for (var i = 0; i < this.group_answer.numElements; i++) {
            var answerrect = this.group_answer.getChildAt(i);
            answerrect.SetSelectWord(null);
            answerrect.visible = true;
            answerrect.SelectWord = null;
        }
        this.group_win.visible = false;
        RES.getResByUrl(leveldata.img, function (texture) {
            console.log(texture);
            this.img_question.texture = texture;
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    //将一个数列随机
    SceneGame.prototype.randomlist = function (arr) {
        var array = [];
        while (arr.length > 0) {
            var i = Math.floor(Math.random() * arr.length);
            array.push(arr[i]);
            arr.splice(i, 1);
        }
        return array;
    };
    //当字点击的时候，由word类抛出
    SceneGame.prototype.onclick_word = function (word) {
        SoundManager.getInstance().playClick();
        //找到一个合适的位置添加进答案内容
        var sel = null;
        for (var i = 0; i < this.group_answer.numChildren; i++) {
            var answer = this.group_answer.getChildAt(i);
            if (answer.SelectWord == null) {
                sel = answer;
                break;
            }
        }
        //当有一个合适的位置的时候就会将字填充，并判断是否胜利
        if (sel != null) {
            sel.SetSelectWord(word);
            //判断是否胜利
            var check_str = "";
            for (var i = 0; i < this.group_answer.numChildren; i++) {
                var answer = this.group_answer.getChildAt(i);
                check_str += answer.getWordText();
            }
            if (check_str == LevelDataManager.getInstance().GetLevel(this.levelIndex).answer) {
                //胜利
                console.log("win");
                this.showWin();
            }
            else {
                if (check_str.length == 4) {
                    SoundManager.getInstance().playWrong();
                }
            }
        }
    };
    SceneGame.prototype.showWin = function () {
        this.group_win.visible = true;
        var leveldata = LevelDataManager.getInstance().GetLevel(this.levelIndex);
        this.lb_from.text = leveldata.tip;
        this.lb_explain.text = leveldata.content;
        SoundManager.getInstance().playRight();
        //解锁下一关
        SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);
        console.log(this.levelIndex);
    };
    SceneGame.prototype.onclick_next = function () {
        SoundManager.getInstance().playClick();
        //下一个题目
        this.group_win.visible = false;
        SceneLevel.getInstance().OpenLevel(this.levelIndex + 1);
        this.InitLevel(this.levelIndex + 1);
        console.log(this.levelIndex);
    };
    return SceneGame;
}(eui.Component));
__reflect(SceneGame.prototype, "SceneGame", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=SceneGame.js.map