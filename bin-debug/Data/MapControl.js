var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapControl = (function () {
    function MapControl() {
    }
    //创建全地图元素，初速化元素
    MapControl.prototype.createElementAllMap = function () {
        this.createAllMap();
    };
    MapControl.prototype.createAllMap = function () {
        var len = GameData.maxRow * GameData.maxColumn;
        var type = "";
        var havelink = true;
        var id = 0;
        var ztype = "";
        var htype = "";
        for (var i = 0; i < GameData.maxRow; i++) {
            for (var t = 0; t < GameData.maxColumn; t++) {
                type = this.createType();
                if (i > 1 && GameData.mapData[i - 1][t] != -1 && GameData.mapData[i - 2][t] != -1) {
                    ztype = GameData.elements[GameData.mapData[i - 1][t]].type;
                }
            }
        }
    };
    MapControl.prototype.createType = function () {
        var num = Math.floor(Math.random() * GameData.elementTypes.length);
        return GameData.elementTypes[num].toString();
    };
    return MapControl;
}());
__reflect(MapControl.prototype, "MapControl");
//# sourceMappingURL=MapControl.js.map