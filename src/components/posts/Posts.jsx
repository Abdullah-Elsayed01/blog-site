// import { useEffect } from 'react'
// import articles from '../../../articles.json';
import Post from '../post/Post';
export default function Posts() {
  // useEffect(() => {
  //   articles.sort((a,b) => b.created_at.localeCompare(a.created_at)) // recent posts
  //   console.log(articles)
  // },[])
  return(
    <section className='container @container'>
      <div className="section-title text-md font-bold my-3 mx-1">
        Recent Posts
      </div>
      <div className='posts-wrapper grid md:grid-cols-2 auto-rows-min gap-2'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  )
}