import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
    excerpt:
      "NextJS is a the React framework for production full-stack development",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
    excerpt:
      "NextJS is a the React framework for production full-stack development",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
    excerpt:
      "NextJS is a the React framework for production full-stack development",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
    excerpt:
      "NextJS is a the React framework for production full-stack development",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
