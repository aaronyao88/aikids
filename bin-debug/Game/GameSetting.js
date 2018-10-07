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
var GameSetting = (function (_super) {
    __extends(GameSetting, _super);
    function GameSetting() {
        return _super.call(this) || this;
    }
    GameSetting.getInstance = function () {
        if (!GameSetting.shared) {
            GameSetting.shared = new GameSetting();
        }
        return GameSetting.shared;
    };
    GameSetting.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSetting.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameSetting.prototype.init = function () {
        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickConfirm, this);
        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMusic, this);
        this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickEffect, this);
        this.update_buttonstate();
    };
    GameSetting.prototype.clickConfirm = function () {
        SoundManager.getInstance().playClick();
        this.parent.removeChild(this);
    };
    GameSetting.prototype.clickMusic = function () {
        SoundManager.getInstance().playClick();
        SoundManager.getInstance().isMusic = !SoundManager.getInstance().isMusic;
        this.update_buttonstate();
    };
    GameSetting.prototype.clickEffect = function () {
        SoundManager.getInstance().playClick();
        SoundManager.getInstance().isEffect = !SoundManager.getInstance().isEffect;
        this.update_buttonstate();
    };
    GameSetting.prototype.update_buttonstate = function () {
        this.btn_effect_disable.visible = !SoundManager.getInstance().isEffect;
        this.btn_music_disable.visible = !SoundManager.getInstance().isMusic;
    };
    return GameSetting;
}(eui.Component));
__reflect(GameSetting.prototype, "GameSetting", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameSetting.js.map