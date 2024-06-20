/**
 * Keyboardクラス
 */
export default class Keyboard {
    /**
     * プロパティ
     */
    _key;
    /**
     * アクセサ
     */
    get up() {
        return this._key["ArrowUp"] === true || this._key["8"] === true;
    }
    get down() {
        return this._key["ArrowDown"] === true || this._key["2"] === true;
    }
    get left() {
        return this._key["ArrowLeft"] === true || this._key["4"] === true;
    }
    get right() {
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
    watchEvent() {
        // keydownイベント
        document.addEventListener("keydown", (e) => {
            this._key[e.key] = true;
        });
        // keyupイベント
        document.addEventListener("keyup", (e) => {
            this._key[e.key] = false;
        });
    }
}
