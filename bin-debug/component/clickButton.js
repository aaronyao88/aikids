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
var clickButton = (function (_super) {
    __extends(clickButton, _super);
    function clickButton(roleArray) {
        var _this = _super.call(this, roleArray) || this;
        _this.btnType = "click";
        _this.roleArray = [{ "name": "飞飞", "value": "bird" }];
        _this.skinName = "resource/component/clickButton.exml";
        return _this;
    }
    return clickButton;
}(droplistButton));
__reflect(clickButton.prototype, "clickButton");
window["clickButton"] = clickButton;
//# sourceMappingURL=clickButton.js.map