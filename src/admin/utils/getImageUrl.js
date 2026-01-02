export const getImageUrl = (path) => {
  if (!path) return "";

  // already full url (cloudinary / external)
  if (path.startsWith("http")) return path;

  const baseUrl =
    import.meta.env.VITE_API_URL || "https://brandnatic-backend-bac.vercel.app";

  return `${baseUrl}${path}`;
};
