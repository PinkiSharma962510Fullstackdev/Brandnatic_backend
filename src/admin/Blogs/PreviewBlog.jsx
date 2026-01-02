import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";


 function PreviewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${id}`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) return null;

  return (
    <div className="prose prose-invert">
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.blocks }} />
    </div>
  );
}
 
export default PreviewBlog;