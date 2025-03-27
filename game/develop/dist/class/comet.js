import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
/**
 * Cometクラス
 */
export default class Comet extends MovableObject {
    /**
     * コンストラクタ
     * @param params        初期化パラメータ
     */
    constructor(params) {
        super({
            element: Util.createElement({
                name: "img",
                attr: {
                    src: "./assets/images/comet.png",
                    class: "blink",
                },
            }),
            ...params,
        });
    }
}
