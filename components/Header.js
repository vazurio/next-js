import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div className="Head">
        <div className="HeaderGroup">
          <Link href="/">
            <a href="">
              <img src="/Angel.svg" alt="Angel Logo" />
            </a>
          </Link>
          <Link href="/Playground">
            <a>Playground</a>
          </Link>
          <a style={{ color: "white" }} href="/Playground">
            <button>Contact</button>
          </a>
        </div>

        <style jsx>{`
          .Head {
            position: fixed;
            width: 100%;
            padding: 15px 0;
            z-index: 100;
            background: white;
            border-bottom: 1px solid #eaeaea;
          }

          .HeaderGroup {
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, auto);
            align-items: center;
            justify-items: center;
          }

          .HeaderGroup button {
            background: blue;
            border: none;
            padding: 8px 22px;
            color: white;
            font-size: 20px;
            font-weight: 600;
            border-radius: 28px;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .HeaderGroup a {
            font-size: 18px;
            outline: none;
            text-decoration: none;
            color: black;
            font-weight: 600;
          }

          .HeaderGroup button:hover {
            background: linear-gradient(
              99.78deg,
              #4200ff 0.48%,
              #bd00ff 102.18%
            );
            color: white;
            box-shadow: 0 20px 40px
              linear-gradient(99.78deg, #4200ff 0.48%, #bd00ff 102.18%);
            transform: translateY(-3px);
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
