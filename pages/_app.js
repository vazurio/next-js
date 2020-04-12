import React from "react";
import App from "next/app";
import "../styles.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
