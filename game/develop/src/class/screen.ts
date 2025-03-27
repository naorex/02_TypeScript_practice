/**
 * Screenクラス
 */
export default class Screen {
  /**
   * アクセサ
   */
  static get width(): number {
    return document.body.clientWidth;
  }
  static get height(): number {
    return document.body.clientHeight;
  }
}
