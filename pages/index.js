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
//SSG
export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}

//postsRes.data.data[0].attributes
