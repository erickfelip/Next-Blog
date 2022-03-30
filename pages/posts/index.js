import React from "react";
import axios from "axios";
import AllPostsList from "../../components/AllPostsList";

export default function posts({ posts }) {
  return (
    <>
      <AllPostsList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
