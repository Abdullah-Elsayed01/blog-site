import { useEffect, useState } from "react";

// Break Down
// This function will Take a content and search value and it will filter the data that matches the search value

export const useSearch = (content, search) => {
  const [originalContent] = useState(content);
  const [filteredContent, setFilteredContent] = useState([]);
  useEffect(() => {
    if (search !== "") {
      const filteredData = originalContent.filter((article) => {
        return article.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredContent(filteredData);
    } else {
      setFilteredContent(originalContent);
    }
  }, [originalContent, filteredContent, search]);
};
