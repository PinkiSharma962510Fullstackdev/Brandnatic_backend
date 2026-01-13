// src/public_pages/utils/getFirstImageFromHTML.js

export const getFirstImageFromHTML = (html) => {
  if (!html || typeof html !== "string") return null;

  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
};
