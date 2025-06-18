import Post from '../post/Post';
import articles from '../../../articles.json';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounced } from "../hooks/useDebounced";
export default function Posts({searchValue}) {
  const debouncedValue = useDebounced(searchValue);
  const navigate = useNavigate()
  const [originalArticlesTotal, setOriginalArticlesTotal] = useState(articles)
  const [articlesTotal, setArticlesTotal] = useState(articles)
  articlesTotal.sort((a,b) => b.created_at.localeCompare(a.created_at)) // recent posts
  useEffect(() => {
    const filteredArticles = originalArticlesTotal.filter((article) => article.title.toLowerCase().includes(debouncedValue.toLowerCase()))
    setArticlesTotal(filteredArticles)
  }, [debouncedValue, originalArticlesTotal])
  return(
    <section className='posts-section container'>
      <div className='grid auto-rows-min gap-2'>
        {articlesTotal.map((article) => {
          return <Post onclick={() => navigate(`/blogs/${article.id}`)} key={article.id} content={article}/>
        })}
      </div>
    </section>
  )
}


