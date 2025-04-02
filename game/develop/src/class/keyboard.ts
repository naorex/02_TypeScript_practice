/**
 * Keyboardクラス
 */
export default class Keyboard {
  /**
   * プロパティ
   */
  protected _key: Record<string, boolean>;

  /**
   * アクセサ
   */
  get up(): boolean {
    return this._key["ArrowUp"] === true || this._key["8"] === true;
  }
  get down(): boolean {
    return this._key["ArrowDown"] === true || this._key["2"] === true;
  }
  get left(): boolean {
    return this._key["ArrowLeft"] === true || this._key["4"] === true;
  }
  get right(): boolean {
    return this._key["ArrowRight"] === true || this._key["6"] === true;
  }

  /**
   * コンストラクタ
   */
  constructor() {
    this._key = {};
    this.watchEvent();
  }

  /**
   * イベント監視
   */
  watchEvent(): void {
    // keydownイベント
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this._key[e.key] = true;
      // console.log(this._key); // for test
    });
    // keyupイベント
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      this._key[e.key] = false;
      // console.log(this._key); // for test
    });
  }
}
