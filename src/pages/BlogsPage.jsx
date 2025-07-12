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
      console.log(`Modified Articles: ${filteredArticles}`);
      setFilteredArticles(filteredArticles);
    } else {
      console.log(`Plain Articles: ${articles}`);
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
          className="page-search-bar p-1 placeholder:text-custom-grey placeholder:text-sm placeholder:pl-2 placeholder:italic border border-custom-grey-2 rounded-md"
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
