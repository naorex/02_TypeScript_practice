import TextObject from "./textObject.js";
/**
 * Scoreクラス
 */
export default class Score extends TextObject {
    /**
     * プロパティ
     */
    _score; // スコアの値
    /**
     * アクセサ
     */
    set score(score) {
        this._score = score;
    }
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super(params);
        this._score = params.score;
    }
    /**
     * 描画
     */
    draw() {
        // テキストを整形
        this._text = this._score.toString().padStart(10, "0");
        super.draw();
    }
}
