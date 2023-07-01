export const DIRECTION = {
  FORWARD: "forward",
  REVERSE: "reverse",
};

export type Direction = keyof typeof DIRECTION;
export function moveThroughArray<T>(
  array: Array<T>,
  index: number,
  direction: Direction = DIRECTION.FORWARD as Direction
): { item: T; newIndex: number } {
  const step = direction === DIRECTION.FORWARD ? 1 : -1;
  const newIndex = index + step;
  if (newIndex > array.length - 1) {
    return { item: array[0], newIndex: 0 };
  }
  if (newIndex < 0) {
    return { item: array[array.length - 1], newIndex: array.length - 1 };
  }
  return { item: array[newIndex], newIndex };
}
