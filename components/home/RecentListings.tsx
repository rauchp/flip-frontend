import LotteryCardPreview from "../general/LotteryCardPreview";

/* eslint-disable @next/next/no-img-element */

const OPTIPUNK_9075 =
  "https://quixotic.io/_next/image?url=https%3A%2F%2Fipfs.quixotic.io%2Fipfs%2FQmbAhtqQqiSQqwCwQgrRB6urGc3umTskiuVpgX7FvHhutU%2F4330.png&w=3840&q=75";

const RecentListings = () => {
  return (
    <div className="self-center mt-16  lg:min-w-[1024px]">
      <h1 className="text-3xl font-bold mb-4 ml-4">Recent Listings</h1>
      <div className="flex flex-col lg:flex-row items-center flex-wrap">
        <LotteryCardPreview
          isClickable
          lotteryId="1"
          imageUrl={OPTIPUNK_9075}
          itemName="Optipunk #9075"
          timeStamp={new Date().getTime() + 100000}
        />
        <LotteryCardPreview
          isClickable
          lotteryId="2"
          imageUrl="https://quixotic.infura-ipfs.io/ipfs/QmS7rPmj3vA32ZQmixG8XEkirtFvxVWtaR1a3ZEW8KNMJf"
          itemName="Apetimism #2903"
          timeStamp={new Date().getTime() + 1000000}
        />
        {/* <RecentCard itemName="Optipunk #9075" timeStamp="" />
        <RecentCard itemName="Optipunk #9075" timeStamp="" /> */}
      </div>
    </div>
  );
};

export default RecentListings;
