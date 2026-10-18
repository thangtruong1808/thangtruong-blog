// Purpose: Helpers for content placeholders like "[METRIC] ...", which never reach production.
// Author: Thang Truong
// Date: 2026-10-18

export const isPlaceholder = (text?: string): boolean => Boolean(text && text.trimStart().startsWith("["));

/** Returns the value only if it is real content. */
export const realContent = (text?: string): string | undefined =>
  text && !isPlaceholder(text) ? text : undefined;

export const realItems = (items?: string[]): string[] => (items ?? []).filter((item) => !isPlaceholder(item));
