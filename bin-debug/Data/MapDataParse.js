var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapDataPares = (function () {
    function MapDataPares() {
    }
    MapDataPares.createMapData = function (val) {
        var len = val.length;
        GameData.unmapnum = len;
        var index = 0;
        for (var i = 0; i < len; i++) {
            index = val[i];
            var row = Math.floor(index / GameData.maxRow);
            var col = index % GameData.maxColumn;
            GameData.mapData[row][col] = -1;
        }
        //可用数据数量
        GameData.currentElementNum = GameData.maxRow * GameData.maxColumn - len;
    };
    return MapDataPares;
}());
__reflect(MapDataPares.prototype, "MapDataPares");
//# sourceMappingURL=MapDataParse.js.map