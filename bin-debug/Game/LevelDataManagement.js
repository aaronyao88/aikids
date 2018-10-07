var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelDataValue = (function () {
    function LevelDataValue() {
    }
    return LevelDataValue;
}());
__reflect(LevelDataValue.prototype, "LevelDataValue");
//Code Level 管理类
var LevelDataManagement = (function () {
    function LevelDataManagement() {
        this.items = [];
        this.items = RES.getRes("level_json");
        //	console.log(this.items);
    }
    LevelDataManagement.getInstance = function () {
        if (!LevelDataManagement.shared) {
            LevelDataManagement.shared = new LevelDataManagement();
        }
        return LevelDataManagement.shared;
    };
    LevelDataManagement.prototype.GetLevel = function (level) {
        level = level - 1;
        if (level <= 0)
            level = 0;
        if (level >= this.items.length)
            level = this.items.length - 1;
        return this.items[level];
    };
    Object.defineProperty(LevelDataManagement.prototype, "Milestone", {
        get: function () {
            var milestone = egret.localStorage.getItem("CODE_level_milestone");
            if (milestone == "" || milestone == null) {
                milestone = "1";
            }
            return parseInt(milestone);
        },
        set: function (value) {
            egret.localStorage.setItem("CODE_level_milestone", value.toString());
        },
        enumerable: true,
        configurable: true
    });
    return LevelDataManagement;
}());
__reflect(LevelDataManagement.prototype, "LevelDataManagement");
//# sourceMappingURL=LevelDataManagement.js.map