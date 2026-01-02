// import { useState, useEffect } from "react";
// import api from "../utils/api";
// import SubscribeModal from "./SubscribeModal";

// function CommentForm({ blogId, onSuccess }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [openSubscribe, setOpenSubscribe] = useState(false);
//   const [needsVerify, setNeedsVerify] = useState(false);


//   const submit = async () => {
//     setError("");

//     if (!form.name || !form.email || !form.message) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       await api.post("/comments", {
//         blogId,
//         name: form.name.trim(),
//         email: form.email.trim(),
//         comment: form.message.trim(),
//       });

//       onSuccess?.();
//       setForm({ name: "", email: "", message: "" });
//       alert("Comment submitted for approval");

//     } catch (err) {
//       const data = err.response?.data;
//       const msg = data?.message || "";

//       // 🔥🔥 FINAL GUARANTEED CHECK
//       if (
//         data?.code === "NOT_VERIFIED" ||
//         msg.toLowerCase().includes("subscribe") ||
//         msg.toLowerCase().includes("verify")
//       ) {
//         setNeedsVerify(true);
// setError("Please subscribe and verify your email to post a comment");
// setOpenSubscribe(true);
//       } else {
//         setError(msg || "Failed to submit comment");
//       }

//     } finally {
//       setLoading(false);
//     }
//   };


//   useEffect(() => {
//   if (!needsVerify || !form.email) return;

//   api
//     .get(`/subscribe/status?email=${form.email}`)
//     .then((res) => {
//       if (res.data.verified) {
//         setNeedsVerify(false);
//         setError("");          // 🔥 red message clear
//       }
//     })
//     .catch(() => {});
// }, [needsVerify, form.email]);

//   return (
//     <>
//       <div className="mt-12 bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
//         <h3 className="text-xl mb-1 text-white">Leave a Comment</h3>
//         <p className="text-xs text-zinc-400 mb-4">
//           Your comment will appear after admin approval
//         </p>

//       {needsVerify && error && (
//   <p className="text-red-500 text-sm mb-3">{error}</p>
// )}

//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) =>
//             setForm({ ...form, name: e.target.value })
//           }
//           className="w-full bg-black p-2 mb-2 rounded border border-zinc-700"
//         />

//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) =>
//             setForm({ ...form, email: e.target.value })
//           }
//           className="w-full bg-black p-2 mb-2 rounded border border-zinc-700"
//         />

//         <textarea
//           placeholder="Comment"
//           value={form.message}
//           onChange={(e) =>
//             setForm({ ...form, message: e.target.value })
//           }
//           className="w-full bg-black p-2 mb-3 rounded border border-zinc-700"
//           rows={4}
//         />

//         <button
//           onClick={submit}
//           disabled={loading}
//           className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Submitting..." : "Post Comment"}
//         </button>
//       </div>

//       {/* 🔥 SUBSCRIBE MODAL */}
//       <SubscribeModal
//         open={openSubscribe}
//         email={form.email}
//         onClose={() => setOpenSubscribe(false)}
//       />
//     </>
//   );
// }

// export default CommentForm;



import { useState, useEffect } from "react";
import api from "../utils/api";
import SubscribeModal from "./SubscribeModal";

function CommentForm({ blogId, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openSubscribe, setOpenSubscribe] = useState(false);
  const [needsVerify, setNeedsVerify] = useState(false);

  /* ================= SUBMIT COMMENT ================= */
  const submit = async () => {
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      await api.post("/comments", {
        blogId,
        name: form.name.trim(),
        email: form.email.trim(),
        comment: form.message.trim(),
        
      });

      // ✅ SUCCESS
      setNeedsVerify(false);
      setOpenSubscribe(false);
      setError("");
      setForm({ name: "", email: "", message: "" });

      onSuccess?.();
      alert("Comment submitted for approval");

    } catch (err) {
      const data = err.response?.data;
      const msg = data?.message || "";

        // 🔒 DAILY LIMIT (2 COMMENTS)
  if (data?.code === "COMMENT_LIMIT") {
    setNeedsVerify(false);        // ❌ verify modal nahi
    setOpenSubscribe(false);      // ❌ modal close
    setError("You can comment only 2 times on this blog in 24 hours");
    return;
  }


      if (
        data?.code === "NOT_VERIFIED" ||
        msg.toLowerCase().includes("verify")
      ) {
        setNeedsVerify(true);
        setError("Please subscribe and verify your email to post a comment");
        setOpenSubscribe(true);
      } else {
        setError(msg || "Failed to submit comment");
      }
    } finally {
      setLoading(false);
    }
  };

  /* ================= AUTO CHECK VERIFY STATUS ================= */
  useEffect(() => {
    if (!needsVerify || !form.email) return;

    const interval = setInterval(() => {
      api
        .get(`/subscribe/status?email=${form.email}`)
        .then((res) => {
          if (res.data.verified) {
            setNeedsVerify(false);
            setError("");
            setOpenSubscribe(false);   // 🔥 AUTO CLOSE MODAL
          }
        })
        .catch(() => {});
    }, 3000); // every 3 sec

    return () => clearInterval(interval);
  }, [needsVerify, form.email]);

  return (
    <>
      <div className="mt-12 bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
        <h3 className="text-xl mb-1 text-white">Leave a Comment</h3>
        <p className="text-xs text-zinc-400 mb-4">
          Your comment will appear after admin approval
        </p>

     
      {/* ERROR MESSAGE */}
{error && (
  <p className="text-red-500 text-sm mb-3">
    {error}
  </p>
)}

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full bg-black p-2 mb-2 rounded border border-zinc-700"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full bg-black p-2 mb-2 rounded border border-zinc-700"
        />

        <textarea
          placeholder="Comment"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full bg-black p-2 mb-3 rounded border border-zinc-700"
          rows={4}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          {loading ? "Submitting..." : "Post Comment"}
        </button>
      </div>

      {/* SUBSCRIBE MODAL */}
      <SubscribeModal
        open={openSubscribe}
        email={form.email}
        onClose={() => setOpenSubscribe(false)}
      />
    </>
  );
}

export default CommentForm;
