import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("draft");
  const [content, setContent] = useState("");
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH BLOG ================= */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${id}`);
        const blog = res.data;

        setTitle(blog.title || "");
        setSlug(blog.slug || "");
        setContent(blog.contentHTML || "");
        setStatus(blog.status || "draft");
        setSeoTitle(blog.seoTitle || "");
        setSeoDescription(blog.seoDescription || "");
        setFaqs(
          Array.isArray(blog.faqs) && blog.faqs.length
            ? blog.faqs
            : [{ question: "", answer: "" }]
        );
      } catch (err) {
        console.error(err);
        alert("Failed to load blog");
      }
    };

    fetchBlog();
  }, [id]);

  /* ================= FAQ LOGIC ================= */
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const updateFaq = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  /* ================= UPDATE BLOG ================= */
  const handleUpdate = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title & content required");
      return;
    }

    setLoading(true);

    try {
      await api.put(`/blogs/${id}`, {
        title,
        slug, // 👈 custom slug
        contentHTML: content,
        status,
        seoTitle,
        seoDescription,
        faqs: faqs.filter(
          (f) => f.question.trim() && f.answer.trim()
        ),
      });

      alert("Blog updated successfully ✅");
      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-6">Edit Blog</h1>

      {/* TITLE */}
      <input
        className="w-full mb-4 p-3 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* SLUG */}
      <div className="mb-6">
        <label className="block text-sm text-zinc-400 mb-1">
          Blog URL (Slug)
        </label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
        />
        <p className="text-xs text-zinc-500 mt-1">
          URL Preview: https://brandnatic.com/blogs/{slug}
        </p>
      </div>

      {/* SEO */}
      <div className="bg-zinc-900 border border-zinc-700 rounded p-4 mb-6">
        <h3 className="text-sm uppercase tracking-wider text-zinc-400 mb-3">
          SEO Settings
        </h3>

        <input
          value={seoTitle}
          onChange={(e) => setSeoTitle(e.target.value)}
          placeholder="SEO Title"
          className="w-full mb-3 p-2 bg-black border border-zinc-700 rounded"
        />

        <textarea
          value={seoDescription}
          onChange={(e) => setSeoDescription(e.target.value)}
          placeholder="Meta Description"
          rows={3}
          className="w-full p-2 bg-black border border-zinc-700 rounded"
        />
      </div>

      {/* STATUS */}
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
          height: 700,
          skin: "oxide-dark",
          content_css: "dark",
          menubar: "file edit view insert format tools table",
          block_formats:
            "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6",
          plugins: `
            advlist autolink lists link image media table
            code preview fullscreen wordcount
            charmap emoticons anchor searchreplace
          `,
          toolbar: `
            undo redo | blocks |
            bold italic underline |
            alignleft aligncenter alignright |
            bullist numlist outdent indent |
            link image media |
            code preview fullscreen
          `,
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
              onChange={(e) =>
                updateFaq(index, "question", e.target.value)
              }
              placeholder="Question"
              className="w-full bg-black border border-zinc-700 p-2 rounded"
            />

            <textarea
              value={faq.answer}
              onChange={(e) =>
                updateFaq(index, "answer", e.target.value)
              }
              placeholder="Answer"
              className="w-full bg-black border border-zinc-700 p-2 rounded"
            />
          </div>
        ))}

        <button
          onClick={addFaq}
          className="bg-zinc-800 px-4 py-2 rounded hover:bg-zinc-700"
        >
          + Add FAQ
        </button>
      </div>

      {/* UPDATE BUTTON */}
      <button
        onClick={handleUpdate}
        disabled={loading}
        className="mt-8 bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update Blog"}
      </button>
    </div>
  );
}

export default EditBlog;
