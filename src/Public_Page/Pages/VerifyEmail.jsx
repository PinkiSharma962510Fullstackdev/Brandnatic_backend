import { useParams, useEffect } from "react";
import axios from "axios";

function VerifyEmail() {
  const { token } = useParams();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/subscribe/verify/${token}`
      )
      .then(() => {
        window.location.href = "/verified?status=success";
      })
      .catch(() => {
        window.location.href = "/verified?status=error";
      });
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Verifying your email...
    </div>
  );
}

export default VerifyEmail;
