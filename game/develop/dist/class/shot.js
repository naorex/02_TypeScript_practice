import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
/**
 * Shotクラス
 */
export default class Shot extends MovableObject {
    /**
     * プロパティ
     */
    _power; // 弾の強度
    /**
     * アクセサ
     */
    get power() {
        return this._power;
    }
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super({
            element: Util.createElement({
                name: "img",
                attr: { src: "./assets/images/shot.png" },
            }),
            ...params,
        });
        this._power = params.power;
    }
    /**
     * 描画
     */
    draw() {
        // 強度に応じて色相を変える
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = "hue-rotate(" + h_angle + "deg)";
        // 発射角度を設定する
        const { x, y } = this.velocity;
        const r = Math.sqrt(x ** 2 + y ** 2);
        const r_angle = Math.asin(x / r) * (180 / Math.PI);
        this.element.style.transform = "rotate(" + r_angle + "deg)";
        // 描画する
        super.draw();
    }
}
