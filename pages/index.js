import Layout from "../components/Layout";

const Home = (props) => (
  <Layout>
    <div className="container">
      <main>
        <div className="HeroGroup">
          <h1>
            Hi! I'm <a href="">Angel!</a>
          </h1>
          <p>
            I'm a Developer that loves pretty & clean code, with experience
            working across the stack, totally in love with the buzz that comes
            from building and shipping products. Did I mention I love
            JavaScript? <code>/About</code>
          </p>
          <button>Playground &rarr;</button>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>SwiftUI Animations &rarr;</h3>
            <p>Have fun with me learning the latest SwiftUI animations!</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>React Js &rarr;</h3>
            <p>Learn about React Js in an interactive course with examples!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Preview and Explore what we have been creating.</p>
          </a>

          <a
            href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Flutter &rarr;</h3>
            <p>Soon you'll be able to also learn Flutter with me.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .HeroGroup {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: 80px 50px;
        }

        @media (max-width: 720px) {
          .HeroGroup {
            padding: 30px 10px;
          }
        }

        .HeroGroup h1 {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;

          animation: HeroAnimation 3s 0.1s forwards
            cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .HeroGroup p {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .HeroGroup button {
          background: #0070f3;
          border: none;
          padding: 12px 32px;
          color: white;
          font-size: 22px;
          font-weight: 600;
          border-radius: 28px;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .HeroGroup h1 a {
          color: #0070f3;
          text-decoration: none;
        }

        .HeroGroup button:hover {
          background: black;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transform: translateY(-3px);
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        @keyframes HeroAnimation {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
