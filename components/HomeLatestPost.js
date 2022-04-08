import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

export function HomeLatestPost({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  function renderPostPreview() {
    return latestPosts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }

  return (
    <>
      <h2>Latest posts</h2>
      {renderPostPreview()}
    </>
  );
}
