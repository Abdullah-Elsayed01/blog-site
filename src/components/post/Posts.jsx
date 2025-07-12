import PostCard from "./PostCard";
export default function Posts({ articles }) {
  return (
    <section className="posts-section container">
      <div className="grid auto-rows-min gap-2">
        {articles.map((article) => {
          const { id, title, image, created_at, category } = article;
          const content = { id, title, image, created_at, category };
          return <PostCard key={article.id} content={content} />;
        })}
      </div>
    </section>
  );
}
