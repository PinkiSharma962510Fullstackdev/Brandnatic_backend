import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [status, setStatus] = useState("draft"); // ✅ ADDED

  /* ✅ FETCH BLOG FROM BACKEND */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${id}`);
        const blog = res.data;

        setTitle(blog.title);
        setContent(blog.contentHTML);
        setStatus(blog.status || "draft"); // ✅ ADDED

        setFaqs(
          Array.isArray(blog.faqs)
            ? blog.faqs.map((faq) => ({
                question: faq.question || "",
                answer: faq.answer || "",
              }))
            : []
        );
      } catch (err) {
        console.error(err);
        alert("Failed to load blog");
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await api.put(`/blogs/${id}`, {
        title,
        contentHTML: content,
        faqs,
        status, // ✅ ADDED
      });

      alert("Blog updated successfully ✅");
      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Update failed ❌");
    }
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl mb-6">Edit Blog</h1>

      {/* TITLE */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-3 bg-zinc-900 border rounded"
        placeholder="Blog title"
      />

      {/* BLOG STATUS */}
      <div className="mb-6">
        <label className="block mb-2 text-sm text-zinc-400">
          Blog Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-black border border-zinc-700 px-4 py-2 rounded"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {/* EDITOR */}
      <Editor
        apiKey="yyckg30efa9r16ib5pnyfnh0tqlojzdo9iwpsrdrjjdtutl3"
        value={content}
        onEditorChange={(val) => setContent(val)}
        init={{
          height: 500,
          skin: "oxide-dark",
          content_css: "dark",
          menubar: true,
          block_formats:
            "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6",
          plugins:
            "lists link image media table code preview fullscreen wordcount",
          toolbar:
            "undo redo | blocks | bold italic | bullist numlist | image media | code preview",
          branding: false,
        }}
      />

      {/* FAQs */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-4 rounded mb-4 space-y-2"
          >
            <input
              value={faq.question}
              onChange={(e) => {
                const updated = [...faqs];
                updated[index].question = e.target.value;
                setFaqs(updated);
              }}
              placeholder="Question"
              className="w-full bg-black border border-zinc-700 p-2 rounded"
            />

            <textarea
              value={faq.answer}
              onChange={(e) => {
                const updated = [...faqs];
                updated[index].answer = e.target.value;
                setFaqs(updated);
              }}
              placeholder="Answer"
              className="w-full bg-black border border-zinc-700 p-2 rounded"
            />
          </div>
        ))}

        <button
          onClick={() =>
            setFaqs([...faqs, { question: "", answer: "" }])
          }
          className="bg-zinc-800 px-4 py-2 rounded hover:bg-zinc-700"
        >
          + Add FAQ
        </button>
      </div>

      <button
        onClick={handleUpdate}
        className="mt-6 bg-blue-600 px-6 py-3 rounded"
      >
        Update Blog
      </button>
    </div>
  );
}

export default EditBlog;
