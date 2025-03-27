/**
 * Screenクラス
 */
export default class Screen {
    /**
     * アクセサ
     */
    static get width() {
        return document.body.clientWidth;
    }
    static get height() {
        return document.body.clientHeight;
    }
}
