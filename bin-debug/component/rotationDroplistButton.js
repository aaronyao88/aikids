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
    function rotationDroplistButton() {
        var _this = _super.call(this) || this;
        _this.btnType = "rotate";
        _this.skinName = "resource/component/rotationDroplistButton.exml";
        return _this;
    }
    rotationDroplistButton.prototype.init = function () {
        //列表
        var list = new eui.List();
        list.dataProvider = new eui.ArrayCollection(["左", "右"]); //设计列表的index数以及每一项的内容
        list.x = 0;
        list.y = 50;
        list.width = 150;
        list.selectedIndex = 0;
        this.list = list;
        //划线
        this.initLine();
    };
    rotationDroplistButton.prototype.onChange = function (evt) {
        this.selectNumberBtn.label = this.list.selectedItem;
        this.direction = this.list.selectedItem;
        this.isOnStage = false;
        this.removeChild(this.list);
    };
    return rotationDroplistButton;
}(droplistButton));
__reflect(rotationDroplistButton.prototype, "rotationDroplistButton");
window["rotationDroplistButton"] = rotationDroplistButton;
//# sourceMappingURL=rotationDroplistButton.js.map