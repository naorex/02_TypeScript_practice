import { Util } from "../utility/util.js";
import GameObject from "./gameObject.js";
/**
 * TextObjectクラス
 */
export default class TextObject extends GameObject {
    /**
     * プロパティ
     */
    _fontName; // 書体
    _fontSize; // 文字サイズ
    _text; // テキストの内容
    /**
     * アクセサ
     */
    get fontName() {
        return this._fontName;
    }
    get fontSize() {
        return this._fontSize;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
    }
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super({
            element: Util.createElement({
                name: "div",
            }),
            ...params,
        });
        this._fontName = params.fontName;
        this._fontSize = params.fontSize;
        this._text = params.text ?? "";
    }
    /**
     * 描画
     */
    draw() {
        this.element.style.fontFamily = this.fontName;
        this.element.style.fontSize = this.fontSize.toString() + "px";
        this.element.innerText = this.text;
        super.draw();
    }
}
