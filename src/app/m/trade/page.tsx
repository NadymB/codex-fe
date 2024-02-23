import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { CandleStickChart } from "@/components/trade/CandleStickChart";

const TradePage = () => {
  return (
    <DefaultLayout
      isShowMenubar={false}
      pageTitle="Dashboard"
      containerStyle="bg-[#13111a] dark:bg-[#13111a]"
    >
      <div className="text-white">heheh</div>
      <CandleStickChart />
    </DefaultLayout>
  );
};
export default TradePage;
