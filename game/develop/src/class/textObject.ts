import { Util } from "../utility/util.js";
import GameObject from "./gameObject.js";
import IText from "../interface/text.js";
import { TextObjectParams } from "../utility/type.js";

/**
 * TextObjectクラス
 */
export default class TextObject extends GameObject implements IText {
  /**
   * プロパティ
   */
  public readonly _fontName: string; // 書体
  public readonly _fontSize: number; // 文字サイズ
  public _text: string; // テキストの内容

  /**
   * アクセサ
   */
  get fontName(): string {
    return this._fontName;
  }
  get fontSize(): number {
    return this._fontSize;
  }
  get text(): string {
    return this._text;
  }
  set text(text: string) {
    this._text = text;
  }

  /**
   * コンストラクタ
   * @param params        初期化パラメータ
   */
  constructor(params: TextObjectParams) {
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
  draw(): void {
    this.element.style.fontFamily = this.fontName;
    this.element.style.fontSize = this.fontSize.toString() + "px";
    this.element.innerText = this.text;
    super.draw();
  }
}
