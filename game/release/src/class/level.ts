import TextObject from "./textObject.js";
import { LevelParams } from "../utility/type.js";

/**
 * Levelクラス
 */
export default class Level extends TextObject {
  /**
   * プロパティ
   */
  protected _level: number; // レベルの値

  /**
   * アクセサ
   */
  set level(level: number) {
    this._level = level;
  }

  /**
   * コンストラクタ
   * @param params        初期化パラメータ
   */
  constructor(params: LevelParams) {
    super(params);
    this._level = params.level;
  }

  /**
   * 描画
   */
  draw(): void {
    // テキストを整形
    this._text = "LEVEL:" + this._level.toString();
    super.draw();
  }
}
