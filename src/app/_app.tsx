import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { Component } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
