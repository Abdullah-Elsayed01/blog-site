import { useEffect } from 'react'
import './Posts.module.css';
import articles from '../../../articles.json';
import Post from '../post/Post';
export default function Posts() {
  // useEffect(() => {
  //   articles.sort((a,b) => b.created_at.localeCompare(a.created_at)) // recent posts
  //   console.log(articles)
  // },[])
  return(
    <section>
      <div className="section-title text-md font-[500] my-3">
        Recent Posts
      </div>
      <Post />
    </section>
  )
}