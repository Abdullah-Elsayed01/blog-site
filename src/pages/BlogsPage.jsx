import { useState, useContext, useEffect } from "react";
import { useDebounced } from "../hooks/useDebounced";
import Posts from "../components/post/Posts";
import { ArticlesContext } from "../contexts/ArticlesContext";
export default function BlogsPage() {
  const articles = useContext(ArticlesContext);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounced(searchValue);
  useEffect(() => {
    if (debouncedSearchValue) {
      const filteredArticles = articles.filter((article) => {
        return article.title
          .toLowerCase()
          .includes(debouncedSearchValue.toLowerCase());
      });
      setFilteredArticles(filteredArticles);
    } else {
      setFilteredArticles(articles);
    }
  }, [debouncedSearchValue]);
  return (
    <main className="container">
      <div className="flex flex-between-center mb-4">
        <h1 className="page-title text-center text-lg! text-bold md:pl-6 ">
          Blogs List
        </h1>
        <input
          type="text"
          className="page-search-bar py-2 px-2 bg-bg-light outline-none placeholder:text-text-muted placeholder:text-sm  placeholder:italic rounded-md placeholder:text-xs"
          placeholder="Search For Blog"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredArticles ? (
        <Posts articles={filteredArticles} />
      ) : (
        <h2 className="text-lg">No Posts Matches</h2>
      )}
    </main>
  );
}
