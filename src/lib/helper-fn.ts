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
