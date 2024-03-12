import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab } from "@/components/layouts/Tab";
import { marketTabOption } from "@/utils/constants";

const MarketPage = () => {
  return (
    <DefaultLayout
      
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Tab options={marketTabOption} />
      <div className="text-white">MarketPage</div>
    </DefaultLayout>
  );
};

export default MarketPage;
