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
    function droplistButton(roleArray) {
        var _this = _super.call(this) || this;
        _this.moveList = new eui.List(); //步数选择下拉列表
        _this.roleList = new eui.List(); // 角色下拉列表
        _this.isEdit = false; //步数选择按钮是否可以点击
        _this.isOnStage = false;
        _this.btnType = "move";
        //读取的变量
        _this.moveNumber = 1;
        _this.direction = "右";
        _this.roleIndex = 0;
        if (roleArray) {
            _this.roleArray = roleArray;
        }
        else {
            _this.roleArray = ["佩奇"];
        }
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
        var moveArray = ["1", "2", "3", "4", "5"];
        this.moveList = this.createList(moveArray);
        this.roleList = this.createList(this.roleArray);
        //设置角色
        if (this.roleArray) {
            this.selectRoleBtn.label = this.roleArray[this.roleIndex];
        }
        //划线
        this.initLine();
    };
    droplistButton.prototype.createList = function (arrayList) {
        var list = new eui.List();
        list.dataProvider = new eui.ArrayCollection(arrayList);
        list.x = 0;
        list.y = 50;
        list.width = this.width;
        list.selectedIndex = 0;
        return list;
    };
    droplistButton.prototype.initLine = function () {
        this.line = new egret.Shape();
        this.line.graphics.lineStyle(5, 0xff00ff);
        this.line.graphics.moveTo(this.width, 0);
        this.line.graphics.lineTo(this.width, this.height);
        this.line.graphics.endFill();
        this.addChild(this.line);
        this.line.visible = false;
    };
    droplistButton.prototype.moveListOnChange = function (evt) {
        this.selectNumberBtn.label = this.moveList.selectedItem;
        this.moveNumber = this.moveList.selectedItem;
        this.isOnStage = false;
        this.removeChild(this.moveList);
    };
    droplistButton.prototype.roleListOnChange = function (evt) {
        this.selectRoleBtn.label = this.roleList.selectedItem;
        this.roleIndex = this.roleList.selectedIndex;
        this.isOnStage = false;
        this.removeChild(this.roleList);
    };
    droplistButton.prototype.moveListTouchTap = function (evt) {
        if (this.isOnStage) {
            this.removeChild(this.moveList);
            this.isOnStage = false;
        }
        else {
            this.addChild(this.moveList);
            this.moveList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.moveListOnChange, this);
            this.isOnStage = true;
        }
    };
    droplistButton.prototype.roleListTouchTap = function (evt) {
        if (this.isOnStage) {
            this.removeChild(this.roleList);
            this.isOnStage = false;
        }
        else {
            this.addChild(this.roleList);
            this.roleList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.roleListOnChange, this);
            this.isOnStage = true;
        }
    };
    droplistButton.prototype.setEdit = function (val) {
        if (val) {
            this.isEdit = true;
            this.selectNumberBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.moveListTouchTap, this);
            this.selectRoleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.roleListTouchTap, this);
        }
        else {
            this.isEdit = false;
            this.selectNumberBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.moveListTouchTap, this);
            this.selectRoleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.roleListTouchTap, this);
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