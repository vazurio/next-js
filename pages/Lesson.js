import Layout from "../components/Layout";

const Lesson = () => (
  <Layout>
    <div className="container">
      <main>
        <div className="Hero">
          <h1>Learn how to create a heart shape</h1>
          <p>
            In this lesson I will show you how to create a heart shape in any
            design tool. Simple and easy you will be able to implement it in a
            few minutes.
          </p>
          <div className="HeroGroup">
            <img src="/FigmaHeart.svg" />
          </div>
          <h3>Heart shape</h3>
          <p>
            Head over to your favorite design tool and start by making a Square
            140 x 140
          </p>
          <div className="HeroGroup">
            <img src="/Square.svg" />
          </div>
          <p>
            Next place a circle on each side of the square, make sure it's
            divided in two, Again 140 x 140.
          </p>
          <div className="HeroGroup">
            <img src="/Circles.svg" />
          </div>
          <p>
            last but not least, Create a union selection and rotate it to 45deg.
          </p>
          <div className="HeroGroup">
            <img src="/ShapeRotate.svg" />
          </div>
          <p>
            There you have it a pretty heart shape! Hope to see you on the next
            one!
          </p>
          <div className="HeroGroup">
            <img src="/FigmaHeart.svg" />
          </div>
        </div>
      </main>
    </div>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0;
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

      @media (max-width: 414px) {
        .Hero {
          max-width: 600px;
        }
      }

      .Hero {
        padding: 20px 20px;
        max-width: 800px;
      }

      .Hero h3 {
        font-size: 40px;
      }

      .Hero h1 {
        font-size: 60px;
      }

      .Hero p {
        font-size: 26px;
      }

      .HeroGroup {
        background: #0a2a55;
        border-radius: 30px;
        padding: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
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

export default Lesson;
