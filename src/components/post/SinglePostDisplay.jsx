import { useParams } from "react-router-dom";
import articles from "../../../articles.json";
import { useEffect, useState } from "react";
import NotFoundPage from "../../pages/NotFoundPage";
export default function SinglePostDisplay() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const pageArticle = articles.find((art) => art.id.toString() == id);
    if (pageArticle) {
      setArticle(pageArticle);
      setLoading(false);
    } else {
      setNotFound(true);
    }
  }, [id]);
  return (
    <>
      {notFound ? (
        <NotFoundPage />
      ) : (
        <section className="">
          <div className="content-wrapper container">
            {loading ? (
              <h1 className="text-lg!">Loading...</h1>
            ) : (
              <>
                <article className="*:my-2">
                  <div className="article-info flex-between-center">
                    <h1 className="text-lg! font-bold">{article.title}</h1>
                    <div className="flex gap-2 text-sm">
                      <p>Category :{article.category}</p>
                      <p>Posted at: {article.created_at.split("T")[0]}</p>
                    </div>
                  </div>
                  <div className="content *:mb-4">
                    <img
                      className="w-full h-[350px] object-cover"
                      src={article.image}
                      alt={article.slug}
                    />
                    <p
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>
                    <p
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>
                    <p
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>
                    <p
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>
                    <p
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></p>
                  </div>
                </article>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
