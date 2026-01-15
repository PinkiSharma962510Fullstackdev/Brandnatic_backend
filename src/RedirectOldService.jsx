import { useParams, Navigate } from "react-router-dom";

export default function RedirectOldService() {
  const { slug } = useParams();

  if (!slug) return <Navigate to="/" replace />;

  return <Navigate to={`/${slug}`} replace />;
}
