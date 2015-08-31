/*
 *  main.js
 *  2014/06/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
 
//乱数発生器
mt = new MersenneTwister();
var rand = function(min, max) { return mt.nextInt(min, max); };    //乱数発生

//定数
//デバッグフラグ
DEBUG = false;

//スクリーンサイズ
SC_W = 640;
SC_H = 1136;

//カードサイズ
CARD_W = 140;
CARD_H = 210;
CARD_SCALE = 1;

//スート
SUIT_SPADE = 0;
SUIT_CLOVER = 1;
SUIT_DIAMOND = 2;
SUIT_HEART = 3;
SUIT_JOKER = 4;

//フレームレート
fps = 30;
var sec = function(s) { return ~~(fps * s);}    //秒からフレーム数へ変換

//インスタンス
appMain = {};

//アプリケーションメイン
tm.main(function() {
    appMain = tmapp.CanvasApp("#world");
    appMain.run();
});
