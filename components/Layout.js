import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <Head>
      <title>Angel Vazquez</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
