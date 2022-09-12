import React from 'react'
import { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useSession } from '../../../hooks/useSession';

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const history = useHistory();
  const session = useSession();

  useEffect(() => {
    if(session?.activeSubscription){
      history.push(`/posts/${post.slug}`);
    }
  },[session]);

  return (
    <>
      <main>
        <article>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div>
            Wanna continue reading?
            <Link to="/">
              Subscribe now 🤗
            </Link>              
          </div>
        </article>
      </main>
    </>
  );
}

export default PostPreview;