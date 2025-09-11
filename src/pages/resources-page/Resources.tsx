import './Resources.css';
import { articles } from '../../data/articles-info';

export function Resources() {
  return (
    <>
      <section id="resources">
        <h1>Articles</h1>
        <div className="articles-grid">
          {articles.map((article) => (
            <>
              <img src={article.image} alt="article icon" />
              <h1>{article.name}</h1>
              <p>{article.date}</p>
              <a href={article.link}>Read more</a>
            </>
          ))}
        </div>
      </section>
    </>
  )
}