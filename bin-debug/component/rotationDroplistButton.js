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
var rotationDroplistButton = (function (_super) {
    __extends(rotationDroplistButton, _super);
    function rotationDroplistButton(roleArray) {
        var _this = _super.call(this, roleArray) || this;
        _this.btnType = "rotate";
        _this.skinName = "resource/component/rotationDroplistButton.exml";
        return _this;
    }
    rotationDroplistButton.prototype.init = function () {
        _super.prototype.init.call(this);
        //列表
        var moveArray = ["左", "右"];
        this.moveList = this.createList(moveArray);
    };
    rotationDroplistButton.prototype.moveListOnChange = function (evt) {
        this.selectNumberBtn.label = this.moveList.selectedItem;
        this.direction = this.moveList.selectedItem;
        this.isOnStage = false;
        this.removeChild(this.moveList);
    };
    return rotationDroplistButton;
}(droplistButton));
__reflect(rotationDroplistButton.prototype, "rotationDroplistButton");
window["rotationDroplistButton"] = rotationDroplistButton;
//# sourceMappingURL=rotationDroplistButton.js.map