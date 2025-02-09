/**
 * Generates a UUID (Universally Unique Identifier) v4
 * @returns {string} A UUID v4 string
 */
export function uuid(prefix: string = ''): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return `${prefix || ''}${v.toString(16)}`;
  });
}

/**
 * Returns the appropriate column span for a service card based on its index
 * @param index - The index of the service card
 * @returns {string} The column span for the service card
 */
export const getColumnSpan = (index: number): string => {
  // Calculate the position within a pair (0 or 1)
  const positionInPair = index % 2;
  // Calculate which pair this item belongs to (0, 1, 2, etc.)
  const pairNumber = Math.floor(index / 2);
  // Alternate between 3-2 and 2-3 pattern based on the pair number
  const isReversedPair = pairNumber % 2 === 1;

  if (isReversedPair) {
    // For odd numbered pairs (2-3 pattern)
    return positionInPair === 0 ? 'col-span-2' : 'col-span-3';
  } else {
    // For even numbered pairs (3-2 pattern)
    return positionInPair === 0 ? 'col-span-3' : 'col-span-2';
  }
};
