var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// 关卡数据
var LevelRequire = (function () {
    function LevelRequire() {
        this.reqElements = [];
    }
    //获取过关条件的数量
    LevelRequire.prototype.getLevelReqNum = function () {
        return this.reqElements.length;
    };
    //添加关卡元素
    LevelRequire.prototype.addElement = function (type, num) {
        var element = new LevelRequireElement();
        element.type = type;
        element.num = num;
        this.reqElements.push(element);
    };
    //启动关卡条件修改
    LevelRequire.prototype.openChange = function () {
        this.reqElements = [];
    };
    //减少关卡中元素数量
    LevelRequire.prototype.changedReqNum = function (type, num) {
        var l = this.getLevelReqNum();
        for (var i = 0; i < l; i++) {
            if (this.reqElements[i].type == type) {
                this.reqElements[i].num -= num;
                return;
            }
        }
    };
    //判断是否通关
    LevelRequire.prototype.isClear = function () {
        var l = this.getLevelReqNum();
        for (var i = 0; i < l; i++) {
            if (this.reqElements[i].num > 0) {
                return false;
            }
        }
        return true;
    };
    return LevelRequire;
}());
__reflect(LevelRequire.prototype, "LevelRequire");
//# sourceMappingURL=LevelRequire.js.map