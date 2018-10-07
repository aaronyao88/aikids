var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//游戏算法
var LinkLogic = (function () {
    function LinkLogic() {
    }
    //当前有没有可消除数据
    LinkLogic.isHaveLine = function () {
        LinkLogic.lines = [];
        var currentType = "";
        var typeNum = 0;
        //行检索
        for (var i = 0; i < GameData.maxRow; i++) {
            for (var t = 0; t < GameData.maxColumn; t++) {
                if (GameData.mapData[i][t] != -1) {
                    if (currentType != GameData.elements[GameData.mapData[i][t]].type) {
                        if (typeNum >= 3) {
                            var arr = [];
                            for (var q = 0; q < typeNum; q++) {
                                arr.push(GameData.mapData[i][t - q - 1]);
                            }
                            LinkLogic.lines.push(arr);
                        }
                        currentType = GameData.elements[GameData.mapData[i][t]].type;
                        typeNum = 1;
                    }
                    else {
                        typeNum++;
                    }
                }
                else {
                    if (typeNum >= 3) {
                        var arr = [];
                        for (var q = 0; q < typeNum; q++) {
                            arr.push(GameData.mapData[i][t - q - 1]);
                        }
                        LinkLogic.lines.push(arr);
                    }
                    currentType = "";
                    typeNum = 0;
                }
            }
            if (typeNum >= 3) {
                var arr = [];
                for (var q = 0; q < typeNum; q++) {
                    arr.push(GameData.mapData[i][t - q - 1]);
                }
                LinkLogic.lines.push(arr);
            }
            currentType = "";
            typeNum = 0;
        }
        //列检索
        for (i = 0; i < GameData.maxColumn; i++) {
            for (t = 0; t < GameData.maxRow; t++) {
                if (GameData.mapData[t][i] != -1) {
                    if (currentType != GameData.elements[GameData.mapData[t][i]].type) {
                        if (typeNum >= 3) {
                            var arr = [];
                            for (q = 0; q < typeNum; q++) {
                                arr.push(GameData.mapData[t - q - 1][i]);
                            }
                            LinkLogic.lines.push(arr);
                        }
                        currentType = GameData.elements[GameData.mapData[t][i]].type;
                        typeNum = 1;
                    }
                    else {
                        typeNum++;
                    }
                }
                else {
                    if (typeNum >= 3) {
                        var arr = [];
                        for (q = 0; q < typeNum; q++) {
                            arr.push(GameData.mapData[t - q - 1][i]);
                        }
                        LinkLogic.lines.push(arr);
                    }
                    currentType = "";
                    typeNum = 0;
                }
            }
            if (typeNum >= 3) {
                var arr = [];
                for (q = 0; q < typeNum; q++) {
                    arr.push(GameData.mapData[t - q - 1][i]);
                }
                LinkLogic.lines.push(arr);
            }
            currentType = "";
            typeNum = 0;
        }
        if (LinkLogic.lines.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    //预判断有没有下一步
    LinkLogic.isNextHaveLine = function () {
        for (var i = 0; i < GameData.maxRow; i++) {
            for (var t = 0; t < GameData.maxColumn; t++) {
                //横向
                if (GameData.mapData[i][t] != -1) {
                    //不是最靠右侧
                    if (t < (GameData.maxColumn - 1) && GameData.mapData[i][t + 1] != -1 && GameData.elements[GameData.mapData[i][t]].type == GameData.elements[GameData.mapData[i][t + 1]].type) {
                        if (t > 0 && GameData.mapData[i][t - 1] != -1) {
                            //左上角
                            if (i > 0 && t > 0 && GameData.mapData[i - 1][t - 1] && GameData.mapData[i - 1][t - 1] != -1 && GameData.elements[GameData.mapData[i - 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                                return true;
                            }
                            //左下角
                            if (i < (GameData.maxRow - 1) && t > 0 && GameData.mapData[i + 1][t - 1] && GameData.mapData[i + 1][t - 1] != -1 && GameData.elements[GameData.mapData[i + 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                                return true;
                            }
                            //左面跳一格
                            if (t > 1 && GameData.mapData[i][t - 2] && GameData.mapData[i][t - 2] != -1 && GameData.elements[GameData.mapData[i][t - 2]].type == GameData.elements[GameData.mapData[i][t]].type) {
                                return true;
                            }
                        }
                        if (t < (GameData.maxColumn - 1) && GameData.mapData[i][t + 2] != -1) {
                            //右上角
                            if (i > 0 && t > 0 && GameData.mapData[i - 1][t - 1] && GameData.mapData[i - 1][t - 1] != -1 && GameData.elements[GameData.mapData[i - 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                                return true;
                            }
                            //右下角
                            if (i < (GameData.maxRow - 1) && t > 0 && GameData.mapData[i + 1][t - 1] && GameData.mapData[i + 1][t - 1] != -1 && GameData.elements[GameData.mapData[i + 1][t - 1]].type == GameData.elements[GameData.mapData[i][t]].type) {
                                return true;
                            }
                            //右面跳一格
                            if (t > 1 && GameData.mapData[i][t - 2] && GameData.mapData[i][t - 2] != -1 && GameData.elements[GameData.mapData[i][t - 2]].type == GameData.elements[GameData.mapData[i][t]].type) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    };
    //空间交换链接消除算法
    LinkLogic.isHaveLineByIndex = function (p1, p2) {
        var p1n = p1;
        var p2n = p2;
        var p1id = GameData.mapData[Math.floor(p1 / GameData.maxColumn)][p1 % GameData.maxRow];
        var p2id = GameData.mapData[Math.floor(p2 / GameData.maxColumn)][p2 % GameData.maxRow];
        GameData.mapData[Math.floor(p1 / GameData.maxColumn)][p1 % GameData.maxRow] = p2id;
        GameData.mapData[Math.floor(p2 / GameData.maxColumn)][p2 % GameData.maxRow] = p1id;
        var rel = LinkLogic.isHaveLine();
        if (rel) {
            GameData.elements[p1id].location = p2;
            GameData.elements[p2id].location = p1;
            return true;
        }
        else {
            GameData.mapData[Math.floor(p1 / GameData.maxColumn)][p1 % GameData.maxRow] = p1id;
            GameData.mapData[Math.floor(p2 / GameData.maxColumn)][p2 % GameData.maxRow] = p2id;
        }
        return false;
    };
    return LinkLogic;
}());
__reflect(LinkLogic.prototype, "LinkLogic");
//# sourceMappingURL=LinkLogic.js.map