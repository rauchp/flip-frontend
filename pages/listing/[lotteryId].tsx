/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/general/Header";
import LotteryCardPreview from "../../components/general/LotteryCardPreview";

const Button = ({ disabled }: { disabled: boolean }) => {
  const disabledStyle =
    "flex flex-row items-center justify-center bg-black rounded-[36px] py-3 w-48 bg-gray-500 text-white self-center";

  const regularStyle =
    "flex flex-row items-center justify-center bg-black rounded-[36px] py-3 w-48 self-center cursor-pointer transition-transform hover:scale-[1.03] ";

  const style = disabled ? disabledStyle : regularStyle;

  return (
    <div className={style}>
      <img alt="Sword Icon" src="/assets/sword.svg" />
      <p className="ml-1 font-bold text-white">Enter</p>
    </div>
  );
};

const LotteryPageInfo = () => {
  const totalPrice = 0.1;
  const [value, setValue] = useState(totalPrice / 2 + "");

  const rawValue = parseFloat(value) / totalPrice;
  const pct = (rawValue * 100).toFixed(2);

  const showErrorText = rawValue < 0.1 || rawValue > 0.5;

  return (
    <div className="h-[420px] p-6 my-3 mx-4 w-[380px] flex flex-col pb-6 rounded-[32px] overflow-hidden shadow-md">
      <h1 className="font-semibold text-2xl">Lottery Info</h1>
      <h2 className="font-medium mt-3">
        Listed by{": "}
        <span className="font-semibold text-red-500">0x31af....2002a</span>
      </h2>
      <div className="flex-grow" />
      <p className="font-medium text-xl">You pay</p>
      <input
        className="text-3xl my-3 px-3 py-2 rounded-lg bg-gray-400 w-48 text-center text-black placeholder:text-gray-600"
        value={value}
        onChange={(text) => setValue(text.target.value)}
      />
      <p className="font-medium text-xl">
        ETH for a <span className="text-red-500">{pct}%</span> chance to win
        this NFT
      </p>
      <p
        style={{ opacity: showErrorText ? 1 : 0 }}
        className="transition-opacity font-medium mt-4 "
      >
        * The range of %'s allowed is between 10% and 50%
      </p>
      <div className="flex-grow" />
      <Button disabled={!!showErrorText} />
    </div>
  );
};
const LotteryPage: NextPage = () => {
  const router = useRouter();
  const { lotteryId } = router.query;
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Lotta Flips - Lottery #{lotteryId}</title>
        <meta name="description" content="You feelin' lucky?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="h-full w-full min-h-screen flex items-center justify-center">
        <LotteryCardPreview
          lotteryId="2"
          imageUrl="https://quixotic.infura-ipfs.io/ipfs/QmS7rPmj3vA32ZQmixG8XEkirtFvxVWtaR1a3ZEW8KNMJf"
          itemName="Apetimism #2903"
          timeStamp=""
        />
        <LotteryPageInfo />
      </div>
    </div>
  );
};

export default LotteryPage;
