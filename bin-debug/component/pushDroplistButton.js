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
var pushDroplistButton = (function (_super) {
    __extends(pushDroplistButton, _super);
    function pushDroplistButton(roleArray) {
        var _this = _super.call(this, roleArray) || this;
        _this.btnType = "push";
        _this.skinName = "resource/component/pushDroplistButton.exml";
        return _this;
    }
    pushDroplistButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    pushDroplistButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    return pushDroplistButton;
}(droplistButton));
__reflect(pushDroplistButton.prototype, "pushDroplistButton");
//# sourceMappingURL=pushDroplistButton.js.map