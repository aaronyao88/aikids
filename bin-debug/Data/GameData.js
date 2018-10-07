var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    //初始化数据
    GameData.initData = function () {
        //创建地图数据
        GameData.mapData = [];
        for (var i = 0; i < GameData.maxRow; i++) {
            var arr = [];
            for (var j = 0; j < GameData.maxColumn; j++) {
                GameData.mapData[j].push(-2); //-2表示可以使用 -1表示不可用
            }
        }
        //创建关卡
        GameData.levelreq = new LevelRequire();
        //游戏中的游戏元素
        GameData.elements = [];
        GameData.unusedElements = [];
        var len = GameData.maxRow * GameData.maxColumn;
        for (var q = 0; q < len; q++) {
            var ele = new GameElement();
            ele.id = q;
            GameData.elements.push(ele);
            GameData.unusedElements.push(q);
        }
        GameData.stageW = egret.MainContext.instance.stage.stageWidth;
        GameData.stageH = egret.MainContext.instance.stage.stageHeight;
    };
    GameData.unmapnum = 0; //空白地图块的数量
    GameData.stepNum = 0; //当前剩余步数
    GameData.levelStepNum = 0; //当前关卡要求的步数
    GameData.levelBackgroundImageName = ""; //当前关卡的背景图
    GameData.maxRow = 8; //行数
    GameData.maxColumn = 8; //列数
    GameData.currentElementNum = 0; //当前关卡中地图可用元素数量
    GameData.stageW = 0; //舞台宽度
    GameData.stageH = 0; //舞台高度
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map