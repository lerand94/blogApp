import PostItem from "./PostItem";

import classes from "./PostsGrid.module.css";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostsGrid;
