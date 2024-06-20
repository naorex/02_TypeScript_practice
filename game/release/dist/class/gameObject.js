/**
 * GameObjectクラス
 */
export default class GameObject {
    /**
     * プロパティ
     */
    _element; // HTML要素
    _size; // サイズ
    _position; // 位置
    _timerId; // タイマーID
    /**
     * アクセサ
     */
    get element() {
        return this._element;
    }
    get size() {
        return this._size;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
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
    draw() {
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
    update() {
        // 要素を描画
        this.draw();
    }
    /**
     * 破棄
     */
    dispose() {
        // DOMから要素を削除
        this.element.remove();
        // 要素のタイマーを停止
        clearInterval(this._timerId);
    }
}
