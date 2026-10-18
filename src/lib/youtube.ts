// Purpose: Extract a YouTube video id from watch, youtu.be or embed URLs.
// Author: Thang Truong
// Date: 2026-10-18

export const getYouTubeId = (rawUrl: string): string => {
  try {
    const url = new URL(rawUrl);
    if (url.hostname === "youtu.be") return url.pathname.slice(1);
    if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2] ?? "";
    return url.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
};
