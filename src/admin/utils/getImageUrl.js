export const getImageUrl = (path) => {
  if (!path) return "";

  // already full url (cloudinary / external)
  if (path.startsWith("http")) return path;

  const baseUrl =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  return `${baseUrl}${path}`;
};
