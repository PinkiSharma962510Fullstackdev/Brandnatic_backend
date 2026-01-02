import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Dashboard() {
  const [blogCount, setBlogCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const [pendingComments, setPendingComments] = useState(0);
const [spamComments, setSpamComments] = useState(0);

 useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      const blogsRes = await api.get("/blogs");
      setBlogCount(blogsRes.data.length);

      const usersRes = await api.get("/users");
      setUserCount(usersRes.data.length);

    const pendingRes = await api.get("/admin/comments/count/pending");
setPendingComments(pendingRes.data.count);

const spamRes = await api.get("/admin/comments/count/spam");
setSpamComments(spamRes.data.count)
    } catch (err) {
      console.error("Dashboard fetch failed", err);
    }
  };

  fetchDashboardData();
}, []);




  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl mb-8">Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-zinc-900 p-6 rounded">
          <p className="text-zinc-400">Total Blogs</p>
          <p className="text-3xl font-bold">{blogCount}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded">
          <p className="text-zinc-400">Pending Comments</p>
          <p className="text-3xl font-bold">{pendingComments}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded">
          <p className="text-zinc-400">Spam Comments</p>
          <p className="text-3xl font-bold">{spamComments}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded">
  <p className="text-zinc-400">Users</p>
  <p className="text-3xl font-bold">{userCount}</p> 
</div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/admin/blogs/create"
            className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-lg
                       hover:border-blue-500 hover:bg-zinc-800 transition"
          >
            Create Blog
          </Link>

          <Link
            to="/admin/blogs"
            className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-lg
                       hover:border-blue-500 hover:bg-zinc-800 transition"
          >
            View Blogs
          </Link>

          <Link
            to="/admin/comments/pending"
            className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-lg
                       hover:border-blue-500 hover:bg-zinc-800 transition"
          >
            Review Comments
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
