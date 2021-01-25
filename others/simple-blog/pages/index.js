import Head from "next/head";
import { getAllPosts } from "../lib/api";
import Header from "../components/Header.js";
import Allposts from "../components/Allposts";
import Footer from "../components/Footer";

export default function Home({ allPosts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Allposts postsList={allPosts} />
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
