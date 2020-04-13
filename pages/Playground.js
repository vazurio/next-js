import Layout from "../components/Layout";
import Link from "next/link";

const Playground = () => (
  <Layout>
    <div className="container">
      <h1>Playground</h1>
      <h3>Coming soon...</h3>
      <button>
        <a href="/index">Go back</a>
      </button>
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

      .container button {
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

      .container button:hover {
        background: linear-gradient(99.78deg, #4200ff 0.48%, #bd00ff 102.18%);
        color: white;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        transform: translateY(-3px);
      }

      .container a {
        color: white;
        text-decoration: none;
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
