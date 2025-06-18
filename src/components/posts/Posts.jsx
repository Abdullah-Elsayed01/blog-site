import Post from '../post/Post';
import articlesData from '../../../articles.json';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounced } from "../hooks/useDebounced";
export default function Posts({searchValue}) {
  const debouncedValue = useDebounced(searchValue);
  const navigate = useNavigate()
  const [originalArticles, setOriginalArticles] = useState([])
  const [articlesDisplayed, setArticlesDisplayed] = useState([])

  useEffect(() => {
    const sortedInitialData = articlesData.sort((a, b) => {
      const dataA = a.created_at || '';
      const dataB = b.created_at || '';
      // sort recent posts
      return dataB.localeCompare(dataA);
    })
    setOriginalArticles(sortedInitialData);
    setArticlesDisplayed(sortedInitialData);
  }, [])
  useEffect(() => {
    if (debouncedValue) {
      const filteredData = originalArticles.filter((article) => {
        return article.title.toLowerCase().includes(debouncedValue.toLowerCase())
      })
      console.log(filteredData)
      setArticlesDisplayed(filteredData)
    } else {
      setArticlesDisplayed(originalArticles)
    }
  }, [debouncedValue, originalArticles])
  return(
    <section className='posts-section container'>
      <div className='grid auto-rows-min gap-2'>
        {articlesDisplayed.map((article) => {
          return <Post onclick={() => navigate(`/blogs/${article.id}`)} key={article.id} content={article}/>
        })}
      </div>
    </section>
  )
}


