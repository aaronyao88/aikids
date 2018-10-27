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
        _this.isMoveListOnStage = false;
        _this.isRoleListOnStage = false;
        _this.btnType = "move";
        //读取的变量
        _this.moveNumber = 1;
        _this.direction = "右";
        if (roleArray) {
            _this.roleArray = roleArray;
        }
        else {
            _this.roleArray = [{ "name": "佩奇", "value": "lead" }];
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
        var moveArray = [{ "name": "1", "value": 1 }, { "name": "2", "value": 2 }, { "name": "3", "value": 3 }, { "name": "4", "value": 4 }, { "name": "5", "value": 5 }];
        this.moveList = this.createList(moveArray);
        this.roleList = this.createList(this.roleArray);
        //设置角色
        if (this.roleArray) {
            this.selectRoleBtn.label = this.roleArray[0].name;
            this.selectedRoleType = this.roleArray[0].value;
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
        this.selectNumberBtn.label = this.moveList.selectedItem.name;
        this.moveNumber = this.moveList.selectedItem.value;
        this.setMoveList(false);
    };
    droplistButton.prototype.moveListTouchTap = function (evt) {
        if (this.isMoveListOnStage) {
            this.setMoveList(false);
        }
        else {
            this.removeList();
            this.setMoveList(true);
            this.moveList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.moveListOnChange, this);
        }
    };
    droplistButton.prototype.roleListOnChange = function (evt) {
        this.selectRoleBtn.label = this.roleList.selectedItem.name;
        this.selectedRoleType = this.roleList.selectedItem.value;
        this.setRoleList(false);
    };
    droplistButton.prototype.roleListTouchTap = function (evt) {
        if (this.isRoleListOnStage) {
            this.setRoleList(false);
        }
        else {
            this.removeList();
            this.setRoleList(true);
            this.roleList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.roleListOnChange, this);
        }
    };
    droplistButton.prototype.removeList = function () {
        if (this.isMoveListOnStage) {
            this.setMoveList(false);
        }
        if (this.isRoleListOnStage) {
            this.setRoleList(false);
        }
    };
    droplistButton.prototype.setMoveList = function (result) {
        if (result) {
            this.addChild(this.moveList);
            this.isOnStage = true;
            this.isMoveListOnStage = true;
        }
        else {
            this.removeChild(this.moveList);
            this.isOnStage = false;
            this.isMoveListOnStage = false;
        }
    };
    droplistButton.prototype.setRoleList = function (result) {
        if (result) {
            this.addChild(this.roleList);
            this.isOnStage = true;
            this.isRoleListOnStage = true;
        }
        else {
            this.removeChild(this.roleList);
            this.isOnStage = false;
            this.isRoleListOnStage = false;
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