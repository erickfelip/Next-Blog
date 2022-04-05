import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";

export default function postPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);

  return (
    <div className="wrapper">
      <article>
        <header>
          <h1>{post.attributes.title}</h1>
          <h2>{post.attributes.description}</h2>
        </header>
        <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
      </article>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = await axios.get(
    `https://banana-tart-23437.herokuapp.com/api/posts/${params.id}`
  );

  return {
    props: {
      post: allPosts.data.data,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await axios.get(
    "https://banana-tart-23437.herokuapp.com/api/posts"
  );
  const paths = allPosts.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
