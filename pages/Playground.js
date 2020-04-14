import Layout from "../components/Layout";
import TextLoop from "react-text-loop";

const Playground = () => (
  <Layout>
    <div className="container">
      <main>
        <div className="Hero">
          <div className="HeroGroup">
            <h1>
              <TextLoop>
                <span> Learn</span>
                <span> Grow</span>
                <span> Explore</span>
              </TextLoop>{" "}
              Together
            </h1>

            <p>
              Learn and improve skills across Business, UX/UI Design,
              Development. Taught by experts to help your workforce do whatever
              comes next.
            </p>
            <p style={{ fontSize: "18px" }}>
              I'll show you how to create incredibly cool projects.
            </p>
            <a href="/index">
              <button>Begin now &rarr;</button>
            </a>
            <a href="/index">
              <br></br>
              <button id="button2">Info &rarr;</button>
            </a>
          </div>
          <div className="Image">
            <img src="/park.svg" alt="Park Logo" width="100%" />
          </div>
        </div>
        <div className="subHero">
          <h3>
            All the professions we teach are in high demand in the market.
          </h3>
        </div>
      </main>
    </div>

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

      .Hero {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 80px 80px;
        width: 90%;
      }

      .subHero {
        width: 100%;
        background: linear-gradient(100.08deg, #2f80ed 0%, #9051e0 100%);
         {
          /* background: #ff9900; */
        }
        padding: 20px 50px;
      }

      .subHero h3 {
        font-size: 3rem;
        line-height: 1.5;
        color: white;
        padding-left: 80px;
        max-width: 800px;
      }

      @media (max-width: 1020px) {
        .Hero {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 20px;
          padding: 50px 20px;
        }

        .HeroGroup {
          text-align: center;
        }
      }

      .HappyUser {
        display: grid;
        grid-template-columns: repeat(3, 3fr);
      }

      .HeroGroup h1 a {
        color: blue;
      }

      .HeroGroup h1 span {
        color: blue;
      }

      .HeroGroup {
        max-width: 500px;
      }

      .Image {
        max-width: 700px;
      }

      .HeroGroup #button2 {
        margin-top: 10px;
        background: white;
        color: black;
        border: 1px solid #eaeaea;
      }

      .HeroGroup #button2:hover {
        background: black;
        color: white;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        transform: translateY(-3px);
      }

      .HeroGroup button {
        background: blue;
        border: none;
        padding: 12px 32px;
        text-decoration: none;
        color: white;
        font-size: 22px;
        font-weight: 600;
        border-radius: 28px;
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .HeroGroup button:hover {
        background: linear-gradient(99.78deg, #4200ff 0.48%, #bd00ff 102.18%);
        color: white;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        transform: translateY(-3px);
      }

      .HeroGroup h1 {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .HeroGroup a {
        color: white;
        text-decoration: none;
      }

      .HeroGroup p {
        font-size: 1.5rem;
        line-height: 1.5;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
    `}</style>
  </Layout>
);

export default Playground;
