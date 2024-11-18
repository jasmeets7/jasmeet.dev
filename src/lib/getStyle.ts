export function getStyle(_class: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(_class)
    .trim();
}
