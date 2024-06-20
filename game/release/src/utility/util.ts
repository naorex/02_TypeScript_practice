import GameObject from "../class/gameObject.js";
import { Point2D } from "./type.js";
import Screen from "../class/screen.js";

/**
 * createElementメソッド引数の型
 */
type createElementOptions = {
  name: string;
  attr?: Record<string, string>;
};

/**
 * 共通関数
 */
export namespace Util {
  /**
   * HTML要素生成
   * @param name     タグの名前
   * @param attr     属性
   * @returns HTMLElement オブジェクト
   */
  export const createElement = ({ name, attr }: createElementOptions): HTMLElement => {
    // 空のHTML要素を生成
    const element = document.createElement(name);
    // 属性が指定されていれば追加
    if (typeof attr !== "undefined") {
      let key: keyof typeof attr;
      for (key in attr) {
        const value = attr[key];
        element.setAttribute(key, value);
      }
    }
    // 生成した要素を返す
    return element;
  };

  /**
   * オブジェクトの座標を画面内に制限
   * @param obj           検査対象のオブジェクト
   * @param strict        true:厳密な制限/false:緩い制限
   * @returns Point2D     制限された座標
   */
  export const clampScreen = <T extends GameObject>(obj: T, strict: boolean = false): Point2D => {
    let [x, y] = [obj.position.x, obj.position.y];
    // 厳密な制限の場合、少しでも画面外にはみ出していれば制限する
    // 緩い制限の場合、少しでも画面内に入っていれば制限しない
    let offsetX = strict ? obj.size.x / 2 : -(obj.size.x / 2);
    let offsetY = strict ? obj.size.y / 2 : -(obj.size.y / 2);
    // X座標を制限
    x = Math.max(x, offsetX);
    x = Math.min(x, Screen.width - offsetX);
    // Y座標を制限
    y = Math.max(y, offsetY);
    y = Math.min(y, Screen.height - offsetY);
    // 制限された座標
    return {
      x: x,
      y: y,
    };
  };

  /**
   * 生成する弾の強度
   * @param level         現在のレベル
   * @returns number      強度
   */
  export const getShotPower = (level: number): number => {
    // 1000を上限としてレベルに応じて強度が増していく
    return Math.min(Math.floor(Math.pow(level, 1.3)), 1000);
  };

  /**
   * 指定範囲内の乱数を取得
   * @param min           最小値
   * @param max           最大値
   * @returns number      乱数
   */
  export const random = (min: number, max: number): number => {
    // minとmaxの間のランダムな数値
    return Math.random() * (max - min) + min;
  };

  /**
   * 生成する隕石の強度
   * @param level         現在のレベル
   * @returns number      強度
   */
  export const getMeteoPower = (level: number): number => {
    // 5000を上限としてレベルに応じて強度が増していく
    return Math.min(Math.floor(Math.pow(level, 1.5)), 5000);
  };

  /**
   * 次のレベルに必要なスコア
   * @param level         現在のレベル
   * @returns number      スコア
   */
  export const getNextScore = (level: number): number => {
    // レベルが上がるごとに必要スコアが増えていく
    return Math.floor(Math.pow(level, 2) * 100);
  };

  /**
   * オブジェクトが画面外に出たかどうか判定
   * @param obj           検査対象のオブジェクト
   * @returns boolean     true:画面外/false:画面内
   */
  export const isOutsideScreen = <T extends GameObject>(obj: T): boolean => {
    let result = false;
    // 画面内に制限した座標を求める
    const clamped_pos = Util.clampScreen(obj, false);
    // 制限前後の座標が不一致ならば画面外
    if (clamped_pos.x !== obj.position.x || clamped_pos.y !== obj.position.y) {
      result = true;
    }
    // 判定結果
    return result;
  };

  /**
   * ゲームオブジェクトの削除
   * @param obj           削除対象オブジェクト
   * @param array         オブジェクトを含む配列
   */
  export const removeObject = <T extends GameObject>(obj: T, array?: Array<T>): void => {
    // HTML要素をDOMから削除
    obj.dispose();
    // オブジェクトを配列から削除
    if (typeof array !== "undefined") {
      array.splice(array.indexOf(obj), 1);
    }
  };

  /**
   * 衝突判定
   * @param obj1          検査対象のオブジェクト1
   * @param obj2          検査対象のオブジェクト2
   * @param radius        衝突したとみなす距離
   * @returns boolean     true:衝突/false:非衝突
   */
  export const isColliding = <T1 extends GameObject, T2 extends GameObject>(obj1: T1, obj2: T2, radius: number): boolean => {
    const [x1, y1] = [obj1.position.x, obj1.position.y];
    const [x2, y2] = [obj2.position.x, obj2.position.y];
    // オブジェクトの座標の差
    const [dx, dy] = [x1 - x2, y1 - y2];
    // オブジェクト間の距離
    const distance = Math.sqrt(dx * dx + dy * dy);
    // 衝突判定
    return distance <= radius;
  };
}
