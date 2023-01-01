import React, { Component, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";  

export const BlogDetailPage = () => {
    
  const [post, setPost] = useState(null);
    const { pk } = useParams();

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/posts/${pk}`);
          const post = await response.json();
          setPost(post);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPost();
    }, [pk]);

    if (!post) {
      return <div>Loading...</div>;
    }
  
    return (
        <div>
          OK
          {pk}
          {post.title}

        </div>
    )
}
    
