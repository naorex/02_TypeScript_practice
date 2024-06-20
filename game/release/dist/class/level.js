import TextObject from "./textObject.js";
/**
 * Levelクラス
 */
export default class Level extends TextObject {
    /**
     * プロパティ
     */
    _level; // レベルの値
    /**
     * アクセサ
     */
    set level(level) {
        this._level = level;
    }
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super(params);
        this._level = params.level;
    }
    /**
     * 描画
     */
    draw() {
        // テキストを整形
        this._text = "LEVEL:" + this._level.toString();
        super.draw();
    }
}
