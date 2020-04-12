import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div className="Head">
        <div className="HeaderGroup">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Playground</a>
          </Link>
          <button href="/">Contact &rarr;</button>
        </div>

        <style jsx>{`
          .Head {
            position: fixed;
            width: 100%;
            padding: 20px 0;
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
            background: #0070f3;
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
            background: black;
            color: white;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
            transform: translateY(-3px);
          }
        `}</style>
      </div>
    );
  }
}

export default Header;
