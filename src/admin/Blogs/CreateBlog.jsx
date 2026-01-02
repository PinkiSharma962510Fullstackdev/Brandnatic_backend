import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import api from "../utils/api";


function CreateBlog() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("draft");
  const [content, setContent] = useState("");
  const [faqs, setFaqs] = useState([
    { question: "", answer: "" },
  ]);
  const [loading, setLoading] = useState(false);

  /* ================= FAQ LOGIC ================= */
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const updateFaq = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  /* ================= SAVE BLOG (DATABASE) ================= */
  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title & content required");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/blogs", {
        title,
        contentHTML: content,
        faqs: faqs.filter(
          (f) => f.question.trim() && f.answer.trim()
        ),
        status
      });

      alert("Blog saved successfully ✅");
      console.log(res.data);

      // reset
      setTitle("");
      setContent("");
      setFaqs([{ question: "", answer: "" }]);
    } catch (err) {
      console.error(err);
      alert("Save failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-6">Create Blog</h1>

      {/* TITLE */}
      <input
        className="w-full mb-4 p-3 bg-zinc-900 border border-zinc-700 rounded"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* EDITOR */}
     <Editor
  apiKey="yyckg30efa9r16ib5pnyfnh0tqlojzdo9iwpsrdrjjdtutl3"
  value={content}
  onEditorChange={(val) => setContent(val)}
  init={{
    height: 600,
    skin: "oxide-dark",
    content_css: "dark",
    menubar: true,

    /* ✅ ADD THIS (Heading H1–H6) */
    block_formats:
      "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6",

    automatic_uploads: false,
    images_upload_url: "",
    media_upload_url: "",

    file_picker_types: "image media",

    images_upload_handler: (blobInfo) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blobInfo.blob());
      }),

    media_upload_handler: (blobInfo) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blobInfo.blob());
      }),

    plugins:
      "lists link image media table code preview fullscreen wordcount",

    /* ✅ ONLY ADD `blocks` (nothing removed) */
    toolbar:
      "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | image media | code preview",

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
              placeholder="Question"
              value={faq.question}
              onChange={(e) =>
                updateFaq(index, "question", e.target.value)
              }
              className="w-full bg-black border border-zinc-700 p-2 rounded"
            />

            <textarea
              placeholder="Answer"
              value={faq.answer}
              onChange={(e) =>
                updateFaq(index, "answer", e.target.value)
              }
              className="w-full bg-black border border-zinc-700 p-2 rounded"
            />
          </div>
        ))}

  <div className="mt-6">
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


        <button
          onClick={addFaq}
          className="bg-zinc-800 px-4 py-2 rounded hover:bg-zinc-700"
        >
          + Add FAQ
        </button>
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={handleSave}
        disabled={loading}
        className="mt-8 bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Blog"}
      </button>
    </div>
  );
}

export default CreateBlog;
