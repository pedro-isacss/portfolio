import { getPostBySlug, getAllPosts } from "../lib/api";
import { useRouter } from "next/router";
import markdownToHtml from "../lib/markdownToHtml";
import Footer from "../components/Footer";

export default function Post({ post, preview }) {
  const router = useRouter();
  return (
    <div className="post-container">
      <div
        className="banner-container"
        style={{
          backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.8)
        ), url(${post.coverImage})`,
        }}
      >
        <h1>{post.title}</h1>
        <span onClick={() => router.push("/")}>HOME</span>
      </div>
      <div
        className="post-content-continer"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
