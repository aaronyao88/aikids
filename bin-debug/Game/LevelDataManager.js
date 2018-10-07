var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelDataItem = (function () {
    function LevelDataItem() {
    }
    return LevelDataItem;
}());
__reflect(LevelDataItem.prototype, "LevelDataItem");
var LevelDataManager = (function () {
    function LevelDataManager() {
        //数组，保存所有关卡的数据
        this.items = [];
        this.items = RES.getRes("questions_json");
    }
    LevelDataManager.getInstance = function () {
        if (!LevelDataManager.shared) {
            LevelDataManager.shared = new LevelDataManager();
        }
        return LevelDataManager.shared;
    };
    LevelDataManager.prototype.GetLevel = function (level) {
        if (level <= 0)
            level = 0;
        if (level >= this.items.length)
            level = this.items.length - 1;
        return this.items[level];
    };
    Object.defineProperty(LevelDataManager.prototype, "Milestone", {
        get: function () {
            var milestone = egret.localStorage.getItem("CODE_milestone");
            if (milestone == "" || milestone == null) {
                milestone = "1";
            }
            return parseInt(milestone);
        },
        set: function (value) {
            egret.localStorage.setItem("CODE_milestone", value.toString());
        },
        enumerable: true,
        configurable: true
    });
    return LevelDataManager;
}());
__reflect(LevelDataManager.prototype, "LevelDataManager");
//# sourceMappingURL=LevelDataManager.js.map