import articles from '../../../articles.json';
const article1 = articles[0];
export default function Post() {
  return (
    <>
      <article>
        <h3>{article1.author.name}</h3>
      </article>
    </>
  )
}