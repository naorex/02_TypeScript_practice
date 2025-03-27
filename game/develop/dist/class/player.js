import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
/**
 * Playerクラス
 */
export default class Player extends MovableObject {
    /**
     * プロパティ
     */
    _speed; // 速さ
    _keyboard; // キーボード制御用
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super({
            element: Util.createElement({
                name: "img",
                attr: { src: "./assets/images/player.png" },
            }),
            velocity: { x: 0, y: 0 },
            acceleration: { x: 0, y: 0 },
            ...params,
        });
        this._speed = params.speed;
        this._keyboard = params.keyboard;
    }
    /**
     * 移動
     */
    move() {
        // 速度更新
        if (this._keyboard.up && !this._keyboard.down) {
            this.velocity.y = this._speed;
        }
        else if (!this._keyboard.up && this._keyboard.down) {
            this.velocity.y = -this._speed;
        }
        else {
            this.velocity.y = 0;
        }
        if (this._keyboard.left && !this._keyboard.right) {
            this.velocity.x = -this._speed;
        }
        else if (!this._keyboard.left && this._keyboard.right) {
            this.velocity.x = this._speed;
        }
        else {
            this.velocity.x = 0;
        }
        // 移動
        super.move();
        // 境界チェック
        this.position = Util.clampScreen(this, true);
    }
}
