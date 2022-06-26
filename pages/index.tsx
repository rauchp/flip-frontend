/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Glow from "../components/general/Glow";
import Header from "../components/general/Header";
import RecentListings from "../components/home/RecentListings";
import RecentLotteries from "../components/home/RecentLotteries";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col relative">
      <Head>
        <title>Lotta Flips</title>
        <meta name="description" content="You feelin' lucky?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="text-center font-bold text-3xl mt-10 tracking-wide">
        Feelin' Lucky?
        <br />
        Select an NFT.
      </h1>
      <RecentListings />
      <RecentLotteries />
      <div className="h-64" />
      <Glow />
    </div>
  );
};

export default Home;
