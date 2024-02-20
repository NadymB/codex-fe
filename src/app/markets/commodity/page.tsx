/* eslint-disable react/jsx-key */
import { Table } from "@/components/table/Table";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab } from "@/components/layouts/Tab";
import { marketTabOption } from "@/utils/constants";
import { TrandingCell } from "@/components/table/TradingCell";
import { PriceCell } from "@/components/table/PriceCell";
import { Button } from "@/components/table/Button";

const MarketPage = () => {
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Tab options={marketTabOption} />
      <div className="w-full p-3">
        <Table
          columns={[
            "Transaction / Trading volume",
            "Price",
            "24H rising decline",
          ]}
          data={[
            [
              <TrandingCell tradingName="COFFE" totalValue="99.14M" />,
              <PriceCell usdtPrice="178.11" usdPrice="178.11" />,
              <Button text="+3.06%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="SILVER" totalValue="93.28M" />,
              <PriceCell usdtPrice="24.134" usdPrice="24.134" />,
              <Button text="+1.58%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="SUGAR" totalValue="71.24M" />,
              <PriceCell usdtPrice="23.27" usdPrice="23.27" />,
              <Button text="+2.18%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="COPPER" totalValue="61.76M" />,
              <PriceCell usdtPrice="3.7827" usdPrice="3.7827" />,
              <Button text="-1.64%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="OIL" totalValue="59.51M" />,
              <PriceCell usdtPrice="74.61" usdPrice="74.61" />,
              <Button text="+0.43%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="GOLD" totalValue="50.56M" />,
              <PriceCell usdtPrice="2046.76" usdPrice="2046.76" />,
              <Button text="+3.00%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="ALUMINIUM" totalValue="45.51M" />,
              <PriceCell usdtPrice="2144.55" usdPrice="2144.55" />,
              <Button text="+1.90%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="RICE" totalValue="29.04M" />,
              <PriceCell usdtPrice="16.994" usdPrice="16.994" />,
              <Button text="+1.56%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="PLATINUM" totalValue="5.59M" />,
              <PriceCell usdtPrice="915.88" usdPrice="915.88" />,
              <Button text="-0.86%" className="bg-[#DD524F]" />,
            ],
          ]}
        />
      </div>
    </DefaultLayout>
  );
};

export default MarketPage;
