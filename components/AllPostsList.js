import React from "react";
import PostPreview from "./PostPreview";

export default function AllPostsList({ posts }) {
  function renderPostPreview() {
    return posts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }

  return (
    <>
      <h2>All posts</h2>
      {renderPostPreview()}
    </>
  );
}
