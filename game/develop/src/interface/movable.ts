/**
 * IMovableインターフェース
 */
export default interface IMovable {
  move(): void; // 移動
  accelerate(): void; // 加速
  stop(): void; // 停止
}
