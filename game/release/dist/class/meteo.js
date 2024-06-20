import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
/**
 * Meteoクラス
 */
export default class Meteo extends MovableObject {
    /**
     * プロパティ
     */
    _power; // 隕石の強度
    _initial_power; // 初期強度
    /**
     * アクセサ
     */
    get power() {
        return this._power;
    }
    set power(power) {
        this._power = power;
    }
    get initial_power() {
        return this._initial_power;
    }
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super({
            element: Util.createElement({
                name: "img",
                attr: { src: "./assets/images/meteo.png" },
            }),
            ...params,
        });
        this._power = params.power;
        this._initial_power = params.power;
    }
    /**
     * 描画
     */
    draw() {
        // 強度の減少に伴って小さくなる
        const scale = (this.power / this.initial_power).toString();
        this.element.style.transform = "scale(" + scale + ")";
        // 強度に応じて色相を変える
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = "hue-rotate(" + h_angle + "deg)";
        super.draw();
    }
}
