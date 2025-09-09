import './Newsletter.css';

export function Newsletter() {
  return (
    <>
      <section id="news-letter">
        <h1>Join our <b>newsletter</b></h1>
        <div className="news-email">
          <input type="text" placeholder="email"/>
          <button>Subscribe</button>
        </div>
      </section>
    </>
  )
}