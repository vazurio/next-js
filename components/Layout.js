import Head from "next/head";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => (
  <>
    <Head>
      <title>Angel Vazquez</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    {props.children}
  </>
);

export default Layout;
