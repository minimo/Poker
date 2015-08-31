/*
 *  Card.js
 *  2014/06/04
 *  @auther minimo  
 *  This Program is MIT license.
 */

tm.define("tmapp.Card", {
    superClass: "tm.display.Sprite",
    
    //パターン番号
    _pattern: 0,

    //カード情報    
    suit: 0,        //マーク
    number: 0,      //数
    drop: false,    //落ち札
    hand: false,    //手札
    reverse: false, //裏面表示

    //Ｚ値
    zIndex: 0,

    init: function(suit, num) {
        //親クラスの初期化
        this.superInit("card", CARD_W, CARD_H);
        this.setScale(CARD_SCALE);

        this.suit = suit;
        this.number = num+1;

        this.pattern = this.suit*13+(this.number-1);
        if (suit == SUIT_JOKER) {
            this.number = 99;
            this.pattern = 54;
        }
    },

    update: function() {
        if (this.reverse) {
            this.setFrameIndex(53);
        } else {
            this.setFrameIndex(this._pattern);
        }
    },

    //回転を考慮した矩形と点の当り判定
    hitTestPoint: function(target) {

        //対象をスプライトの中心を原点とした座標に移動
        var tx = target.x - this.x;
        var ty = target.y - this.y;
        var arad = Math.atan2(ty, tx);    //原点との角度
        var dis = distance(this, target);

        //元スプライトの回転分、判定座標を回転する
        var rad = arad-(this.rotation)*toRad;
        var tx2 = Math.cos(rad)*dis;
        var ty2 = Math.sin(rad)*dis;

        var w = this.width/2*this.scaleX;
        var h = this.height/2*this.scaleY;
        if (-w < tx2 && tx2 < w && -h < ty2 && ty2 < h)return true;
        return false;
    }
});

tmapp.Card.prototype.accessor("pattern", {
    "get": function() { return this._pattern; },
    "set": function(ptn) {
        this._pattern = ptn;
        this.setFrameIndex(ptn);
    }
});
