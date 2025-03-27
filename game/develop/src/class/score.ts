import TextObject from "./textObject.js";
import { ScoreParams } from "../utility/type.js";

/**
 * Scoreクラス
 */
export default class Score extends TextObject {
  /**
   * プロパティ
   */
  protected _score: number; // スコアの値

  /**
   * アクセサ
   */
  set score(score: number) {
    this._score = score;
  }

  /**
   * コンストラクタ
   * @param params        初期化パラメータ
   */
  constructor(params: ScoreParams) {
    super(params);
    this._score = params.score;
  }

  /**
   * 描画
   */
  draw(): void {
    // テキストを整形
    this._text = this._score.toString().padStart(10, "0");
    super.draw();
  }
}
