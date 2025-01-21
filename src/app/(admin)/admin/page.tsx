"use client";
import { useEffect, useState } from "react";
import "../admin/styles/global.css"; // CSS dosyanı doğru dizine göre çağır.

const SinglePage = () => {
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // Check if the "redirected" query parameter is present in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("redirected") === "true" && !hasRedirected) {
      // Set the state to avoid reloading multiple times
      setHasRedirected(true);
      // Redirect to the admin page
      window.location.href = "/admin"; // Replace '/admin' with your desired admin page URL
    }
  }, [hasRedirected]); // Only runs when hasRedirected changes

  return (
    <div>
      <a href="#">admin panel</a>
    </div>
  );
};

export default SinglePage;
