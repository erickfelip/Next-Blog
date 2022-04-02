import axios from "axios";
import React from "react";
import { HomeHeader } from "../components/HomeHeader";
import { HomeLatestPost } from "../components/HomeLatestPost";

function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPost posts={posts} />
    </>
  );
}

export default Home;
export async function getStaticProps() {
  const postsRes = await axios.get(
    "https://banana-tart-23437.herokuapp.com/api/posts"
  );
  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
