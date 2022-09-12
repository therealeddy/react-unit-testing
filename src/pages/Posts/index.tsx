import React from 'react';
import { Link } from 'react-router-dom';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <main>
        <div>
          { posts.map(post => (
            <Link key={post.slug} to={`/posts/${post.slug}`}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>
                {post.excerpt}
              </p>
            </Link>
          )) }
        </div>
      </main>
    </>
  );
}

export default Posts;