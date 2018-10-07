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
var SceneLevel = (function (_super) {
    __extends(SceneLevel, _super);
    function SceneLevel() {
        var _this = _super.call(this) || this;
        //存放关卡按钮
        _this.LevelIcon = [];
        console.log("SceneLevel constructor()");
        return _this;
    }
    SceneLevel.getInstance = function () {
        if (!SceneLevel.shared) {
            SceneLevel.shared = new SceneLevel();
        }
        return SceneLevel.shared;
    };
    SceneLevel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SceneLevel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    SceneLevel.prototype.init = function () {
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_back, this);
        SoundManager.getInstance();
        //创建地图选项
        var row = 10;
        var col = 10;
        var spanx = this.width / col; //计算行x间隔
        var spany = this.height / row; //计算列y间隔
        var group = new eui.Group(); //地图背景
        group.width = this.width;
        //每个icon的高度 * 总关数
        group.height = this.height; //算出最大尺寸
        console.log("stage width:" + this.width + " height:" + this.height);
        //填充背景
        for (var i = 0; i < (group.height / this.height); i++) {
            var img = new eui.Image();
            img.source = RES.getRes("GameBG2_jpg");
            img.y = i * this.height;
            img.touchEnabled = false;
            this.gp_level.addChildAt(img, 0);
        }
        //以正弦曲线绘制关卡图标的路径
        var milestone = LevelDataManager.getInstance().Milestone;
        for (var i = 0; i < 10; i++) {
            var icon = new LevelIcon();
            icon.Level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            icon.y += spany * i / 2;
            icon.y = group.height - icon.y - spany;
            group.addChild(icon);
            icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_level, this);
            //依据进度设置关卡显示
            icon.enabled = i < milestone;
            //保存到一个列表中
            this.LevelIcon.push(icon);
        }
        //开启位图缓存模式
        group.cacheAsBitmap = true;
        this.gp_level.addChild(group);
        //滚动到底部
        this.gp_level.scrollV = group.height - this.height;
        //箭头
        this.img_arrow.x = group.getChildAt(0).x - 25;
        this.img_arrow.y = group.getChildAt(0).y - 70;
        group.addChild(this.img_arrow);
    };
    //进入关卡
    SceneLevel.prototype.onclick_level = function (e) {
        var icon = e.currentTarget;
        console.log("icon.level:" + icon.Level);
        SoundManager.getInstance().playClick();
        if (this.sel_level != icon.Level) {
            this.img_arrow.x = icon.x - 25;
            this.img_arrow.y = icon.y - 70;
            this.sel_level = icon.Level;
        }
        else {
            console.log("start_level:" + icon.Level);
            this.parent.addChild(CodeGame.getInstance());
            CodeGame.getInstance().InitLevel(icon.Level);
            // this.parent.addChild(SceneGame.getInstance());
            // SceneGame.getInstance().InitLevel(icon.Level);
            this.parent.removeChild(this);
        }
    };
    SceneLevel.prototype.onclick_back = function () {
        this.parent.addChild(SceneBegin.getInstance());
        SoundManager.getInstance().playClick();
        this.parent.removeChild(this);
    };
    SceneLevel.prototype.OpenLevel = function (level) {
        console.log(this.LevelIcon);
        var icon = this.LevelIcon[level - 1];
        icon.enabled = true;
        if (level > LevelDataManagement.getInstance().Milestone) {
            LevelDataManagement.getInstance().Milestone = level;
            //箭头
            this.img_arrow.x = icon.x - 25;
            this.img_arrow.y = icon.y - 70;
            this.sel_level = icon.Level;
        }
    };
    return SceneLevel;
}(eui.Component));
__reflect(SceneLevel.prototype, "SceneLevel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=SceneLevel.js.map