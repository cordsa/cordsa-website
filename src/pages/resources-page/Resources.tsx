import './Resources.css';
import { articles } from '../../data/articles-info';

export function Resources() {
  return (
    <>
      <section id="resources">
        <h1>Articles</h1>
        <div className="articles-grid">
          {articles.map((article) => (
            <div className="article-box">
              <div className="resources-line"></div>
              <img src={article.image} alt="article icon" />
              <div className="article-info">
                <h1>{article.name}</h1>
                <p>{article.date}</p>
                <a href={article.link} target="_blank" rel="noreferrer noopener">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}