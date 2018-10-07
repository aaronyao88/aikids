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
var MoveForward = (function (_super) {
    __extends(MoveForward, _super);
    function MoveForward() {
        var _this = _super.call(this) || this;
        _this.btnType = "move";
        _this.skinName = "resource/game/MoveForward.exml";
        return _this;
    }
    MoveForward.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MoveForward.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    MoveForward.prototype.init = function () {
        this.line = new egret.Shape();
        this.line.graphics.lineStyle(5, 0xff00ff);
        this.line.graphics.moveTo(72, 0);
        this.line.graphics.lineTo(72, 72);
        this.line.graphics.endFill();
        this.addChild(this.line);
        this.line.visible = false;
    };
    MoveForward.prototype.isHit = function (obj2) {
        var rect1 = this.getBounds(); // 按钮本身的边界
        var rect2 = obj2.getBounds(); //被撞击物的边界
        rect1.x = this.x;
        rect1.y = this.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        // console.log(rect1);
        // console.log(rect2);
        return rect2.intersects(rect1);
    };
    return MoveForward;
}(eui.Button));
__reflect(MoveForward.prototype, "MoveForward");
window["MoveForward"] = MoveForward;
//# sourceMappingURL=MoveForward.js.map