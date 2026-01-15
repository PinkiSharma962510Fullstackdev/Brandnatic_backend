import { useParams, Navigate } from "react-router-dom";

export default function RedirectOldBlog() {
  const { slug } = useParams();

  // Prevent infinite loop
  if (!slug || slug.startsWith("blogs")) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to={`/blogs/${slug}`} replace />;
}
