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
var droplistButton = (function (_super) {
    __extends(droplistButton, _super);
    function droplistButton() {
        var _this = _super.call(this) || this;
        _this.isEdit = false; //步数选择按钮是否可以点击
        _this.btnType = "move";
        _this.skinName = "resource/component/droplistButton.exml";
        return _this;
    }
    droplistButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    droplistButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    droplistButton.prototype.init = function () {
        //列表
        var list = new eui.List();
        list.dataProvider = new eui.ArrayCollection(["1", "2", "3", "4", "5"]); //设计列表的index数以及每一项的内容
        list.x = 0;
        list.y = 50;
        list.width = 150;
        list.visible = false;
        list.selectedIndex = 0;
        this.list = list;
        this.addChild(this.list);
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);
        //划线
        this.line = new egret.Shape();
        this.line.graphics.lineStyle(5, 0xff00ff);
        this.line.graphics.moveTo(this.width, 0);
        this.line.graphics.lineTo(this.width, this.height);
        this.line.graphics.endFill();
        this.addChild(this.line);
        this.line.visible = false;
    };
    droplistButton.prototype.onChange = function (evt) {
        this.selectNumberBtn.label = this.list.selectedItem;
        this.list.visible = false;
    };
    droplistButton.prototype.touch_tap = function (evt) {
        this.list.visible = !this.list.visible;
        console.log("this.list.visible:" + this.list.visible);
    };
    droplistButton.prototype.setEdit = function (val) {
        if (val) {
            this.isEdit = true;
            //添加步数按钮
            this.selectNumberBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_tap, this);
        }
        else {
            this.isEdit = false;
            //添加步数按钮
            this.selectNumberBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_tap, this);
        }
    };
    droplistButton.prototype.isHit = function (obj2) {
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
    return droplistButton;
}(eui.Component));
__reflect(droplistButton.prototype, "droplistButton", ["eui.UIComponent", "egret.DisplayObject"]);
window["droplistButton"] = droplistButton;
//# sourceMappingURL=droplistButton.js.map