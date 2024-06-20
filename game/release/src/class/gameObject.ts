import { Point2D, Size, GameObjectParams } from "../utility/type.js";

/**
 * GameObjectクラス
 */
export default class GameObject {
  /**
   * プロパティ
   */
  protected readonly _element: HTMLElement; // HTML要素
  protected readonly _size: Size; // サイズ
  protected _position: Point2D; // 位置
  protected readonly _timerId: number; // タイマーID

  /**
   * アクセサ
   */
  get element(): HTMLElement {
    return this._element;
  }
  get size(): Size {
    return this._size;
  }
  get position(): Point2D {
    return this._position;
  }
  set position(position: Point2D) {
    this._position = position;
  }

  /**
   * コンストラクタ
   * @param params        初期化パラメータ
   */
  constructor(params: GameObjectParams) {
    this._element = params.element;
    this._size = params.size ?? { x: 0, y: 0 };
    this._position = params.position;
    // タイマーイベントの割り当て
    this._timerId = setInterval(this.update.bind(this), 50);
    // サイズの設定
    const width = this._size.x.toString() + "px";
    const height = this._size.y.toString() + "px";
    this._element.style.width = width;
    this._element.style.height = height;
    // トランジションの設定
    this._element.style.transition = "all 0.1s linear 0s";
    // 初回描画時のちらつき防止
    this._element.style.opacity = "0";
    // 要素の追加
    document.body.appendChild(this._element);
  }

  /**
   * 描画
   */
  draw(): void {
    const left = (this.position.x - this.size.x / 2).toString() + "px";
    const bottom = (this.position.y - this.size.y / 2).toString() + "px";
    this.element.style.position = "fixed";
    this.element.style.left = left;
    this.element.style.bottom = bottom;
    this.element.style.opacity = "1";
  }

  /**
   * 更新
   */
  update(): void {
    // 要素を描画
    this.draw();
  }

  /**
   * 破棄
   */
  dispose(): void {
    // DOMから要素を削除
    this.element.remove();
    // 要素のタイマーを停止
    clearInterval(this._timerId);
  }
}
