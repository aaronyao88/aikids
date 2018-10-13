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
var Barrier = (function (_super) {
    __extends(Barrier, _super);
    function Barrier(type, id) {
        var _this = _super.call(this) || this;
        _this.type = "wall";
        _this.type = type;
        _this.barrier_id = id;
        _this.skinName = "resource/component/Barrier.exml";
        return _this;
    }
    Barrier.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Barrier.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Barrier.prototype.init = function () {
        switch (this.type) {
            case "wall":
                this.rect.fillColor = 0x0f00ff;
                this.txt.text = "墙";
                break;
            case "hole":
                this.rect.fillColor = 0x000000;
                this.txt.text = "坑";
                break;
            case "box":
                this.rect.fillColor = 0x5B3535;
                this.rect.width = 130;
                this.rect.height = 130;
                this.txt.text = "箱";
                break;
            default:
                this.rect.fillColor = 0x0f00ff;
                this.txt.text = "墙";
        }
    };
    return Barrier;
}(eui.Component));
__reflect(Barrier.prototype, "Barrier", ["eui.UIComponent", "egret.DisplayObject"]);
window["Barrier"] = Barrier;
//# sourceMappingURL=Barrier.js.map