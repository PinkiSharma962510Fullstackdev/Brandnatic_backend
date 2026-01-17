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
  const [seoTitle, setSeoTitle] = useState("");
const [seoDescription, setSeoDescription] = useState("");
const [slug, setSlug] = useState("");
const [service, setService] = useState("");

const [coverImage, setCoverImage] = useState("");

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
      // const res = await api.post("/blogs", {
      //   title,
      //   contentHTML: content,
      //   faqs: faqs.filter(
      //     (f) => f.question.trim() && f.answer.trim()
      //   ),
      //   status
      // });
// const res = await api.post("/blogs", {
//   title,
//   slug, // 👈 
//   contentHTML: content,
//   status,
//   seoTitle,
//   seoDescription,
//   faqs: faqs.filter(
//     (f) => f.question.trim() && f.answer.trim()
//   ),
// });

const res = await api.post("/blogs", {
  title,
  slug,
  contentHTML: content,
  coverImage,
  service, 
  status,
  seoTitle,
  seoDescription,
  faqs: faqs.filter(
    (f) => f.question.trim() && f.answer.trim()
  ),
  
});




      alert("Blog saved successfully ✅");
      console.log(res.data);

      // reset
      setTitle("");
      setContent("");
      setFaqs([{ question: "", answer: "" }]);
  } catch (err) {
  console.error("FULL ERROR 👉", err);
  console.error("RESPONSE 👉", err.response?.data);

  alert(
    err.response?.data?.message ||
    err.message ||
    "Unknown error"
  );
} finally {
  setLoading(false);
}};

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
      <div className="mb-6">
  <label className="block text-sm text-zinc-400 mb-1">
    Blog URL (Slug)
  </label>

  <input
    type="text"
    value={slug}
    onChange={(e) => setSlug(e.target.value)}
    placeholder="ppc-digital-marketing-guide-2026"
    className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
  />

  <p className="text-xs text-zinc-500 mt-1">
    URL Preview: https://brandnatic.com/blogs/{slug || "auto-generated"}
  </p>
</div>

      {/* SEO FIELDS */}
<div className="bg-zinc-900 border border-zinc-700 rounded p-4 mb-6">
  <h3 className="text-sm uppercase tracking-wider text-zinc-400 mb-3">
    SEO Settings
  </h3>

  <div className="mb-4">
    <label className="block text-sm text-zinc-400 mb-1">
      SEO Title
    </label>
    <input
      type="text"
      value={seoTitle}
      onChange={(e) => setSeoTitle(e.target.value)}
      placeholder="SEO title (max 60 characters)"
      maxLength={60}
      className="w-full p-2 bg-black border border-zinc-700 rounded"
    />
    <p className="text-xs text-zinc-500 mt-1">
      Leave empty to use Blog Title
    </p>
  </div>

  <div>
    <label className="block text-sm text-zinc-400 mb-1">
      Meta Description
    </label>
    <textarea
      value={seoDescription}
      onChange={(e) => setSeoDescription(e.target.value)}
      placeholder="Meta description (max 160 characters)"
      maxLength={160}
      rows={3}
      className="w-full p-2 bg-black border border-zinc-700 rounded"
    />
    <p className="text-xs text-zinc-500 mt-1">
      Leave empty to auto-generate from content
    </p>
  </div>
</div>
{/* SERVICE SELECTION */}
<div className="mb-6">
  <label className="block text-sm text-zinc-400 mb-1">
    Blog Service (Very Important)
  </label>

  <select
    value={service}
    onChange={(e) => setService(e.target.value)}
    className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
    required
  >
    <option value="">Select Service</option>
    <option value="SEO Marketing">SEO Marketing</option>
    <option value="AI Automation">AI Automation</option>
    <option value="Web Development">Web Development</option>
    <option value="Performance Marketing">Performance Marketing</option>
    <option value="Lead Generation">Lead Generation</option>
    <option value="Software Development">Software Development</option>
  </select>

  <p className="text-xs text-zinc-500 mt-1">
    This decides where the blog appears on the website.
  </p>
</div>

{/* COVER IMAGE */}
<div className="mb-6">
  <label className="block text-sm text-zinc-400 mb-1">
    Cover Image URL
  </label>

  <input
    type="text"
    value={coverImage}
    onChange={(e) => setCoverImage(e.target.value)}
    placeholder="https://res.cloudinary.com/.../blog-cover.webp"
    className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
  />

  <p className="text-xs text-zinc-500 mt-1">
    Use a public image URL (Cloudinary / CDN)
  </p>
</div>



      {/* EDITOR */}
<Editor
  apiKey="yyckg30efa9r16ib5pnyfnh0tqlojzdo9iwpsrdrjjdtutl3"
  value={content}
  onEditorChange={(val) => setContent(val)}
  init={{
    height: 700,

    /* ================= ADMIN LOOK ONLY ================= */
    skin: "oxide-dark",
    content_css: "dark",

    menubar: "file edit view insert format tools table",

    table_toolbar:
  "tableprops tablecellprops | tableinsertrowbefore tableinsertrowafter | tableinsertcolbefore tableinsertcolafter",


    /* ================= STRUCTURE (BACKEND SAFE) ================= */
    block_formats:
      "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6",

    forced_root_block: "p",
    remove_empty: true,
    convert_urls: false,

    /* ================= PLUGINS ================= */
    plugins: `
      advlist autolink lists link image media table
      code preview fullscreen wordcount
      charmap emoticons
      anchor searchreplace visualblocks
      insertdatetime
     
    `,

    /* ================= TOOLBAR (EXTRA PRO) ================= */
    toolbar: `
       undo redo| blocks |
      bold italic underline strikethrough |
      forecolor backcolor |
      alignleft aligncenter alignright alignjustify |
      bullist numlist outdent indent |
      link anchor |
      image media table |
      charmap emoticons |
      code preview fullscreen
    `,
     /* ADD IT EXACTLY HERE */
    // content_style: `
    //   a {
    //     color: #3b82f6;        /* blue link */
    //     text-decoration: none; /* no underline */
    //     font-weight: 500;
    //   }
    //   a:hover {
    //     text-decoration: underline;
    //   }
    // `,
   
content_style: `
  /* 🔗 LINK STYLE FIX (NO BLUE, NO UNDERLINE) */
  a {
    color: inherit;
    text-decoration: none;
    font-weight: inherit;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline; /* optional, premium UX */
  }

  /* 🟦 HIGHLIGHT BOX */
  .highlight-box {
    background: #0f172a;
    border-left: 4px solid #3b82f6;
    padding: 16px;
    margin: 16px 0;
  }

  /* 📝 NOTE BOX */
  .note {
    background: #020617;
    border: 1px solid #334155;
    padding: 12px;
  }
`

,

    /* ================= COLORS (PRO BLOGS) ================= */
    color_map: [
      "FFFFFF", "White",
      "000000", "Black",
      "0EA5E9", "Brand Blue",
      "22C55E", "Green",
      "F59E0B", "Amber",
      "EF4444", "Red",
      "A855F7", "Purple",
      "64748B", "Gray"
    ],

    /* ================= BACKGROUND COLOR SUPPORT ================= */
    toolbar_mode: "wrap",

    /* ================= LINE HEIGHT & FONT SIZE ================= */
    lineheight_formats: "1 1.2 1.4 1.6 1.8 2",
    font_size_formats:
      "12px 14px 16px 18px 20px 24px 28px 32px 36px",

    /* ================= IMAGES / BG IMAGE (BASE64 SAFE) ================= */
    automatic_uploads: false,
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

      

    /* ================= SECURITY / CLEAN ================= */
    paste_as_text: false,
    browser_spellcheck: true,

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
