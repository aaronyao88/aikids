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
var SceneBegin = (function (_super) {
    __extends(SceneBegin, _super);
    function SceneBegin() {
        return _super.call(this) || this;
    }
    SceneBegin.getInstance = function () {
        if (!SceneBegin.shared) {
            SceneBegin.shared = new SceneBegin();
        }
        return SceneBegin.shared;
    };
    SceneBegin.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    // 组件加载完毕之后调用该函数
    SceneBegin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    SceneBegin.prototype.init = function () {
        SoundManager.getInstance();
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginTap, this);
        this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beginSetting, this);
    };
    SceneBegin.prototype.beginTap = function () {
        SoundManager.getInstance().playClick();
        this.parent.addChild(SceneLevel.getInstance());
        this.parent.removeChild(this);
    };
    //打开设置界面
    SceneBegin.prototype.beginSetting = function () {
        SoundManager.getInstance().playClick();
        this.addChild(GameSetting.getInstance());
    };
    return SceneBegin;
}(eui.Component));
__reflect(SceneBegin.prototype, "SceneBegin", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=SceneBegin.js.map