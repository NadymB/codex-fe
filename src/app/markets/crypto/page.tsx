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
              <TrandingCell tradingName="DOGE" totalValue="1.73B" />,
              <PriceCell usdtPrice="0.08816" usdPrice="0.08816" />,
              <Button text="+3.06%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="XRP" totalValue="434.49M" />,
              <PriceCell usdtPrice="0.5694" usdPrice="0.5694" />,
              <Button text="+1.58%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="CHZ" totalValue="239.92M" />,
              <PriceCell usdtPrice="0.11895" usdPrice="0.11895" />,
              <Button text="+2.18%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="MATIC" totalValue="112.74M" />,
              <PriceCell usdtPrice="0.9819" usdPrice="0.9819" />,
              <Button text="-1.64%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="FTM" totalValue="72.42M" />,
              <PriceCell usdtPrice="0.4352" usdPrice="0.4352" />,
              <Button text="+0.43%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="SAND" totalValue="38.05M" />,
              <PriceCell usdtPrice="0.5213" usdPrice="0.5213" />,
              <Button text="+3.00%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="APE" totalValue="13.87M" />,
              <PriceCell usdtPrice="1.1765" usdPrice="1.1765" />,
              <Button text="+1.90%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="DOT" totalValue="9.01M" />,
              <PriceCell usdtPrice="7.898" usdPrice="7.898" />,
              <Button text="+1.56%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="SOL" totalValue="3.95M" />,
              <PriceCell usdtPrice="110.390" usdPrice="110.390" />,
              <Button text="-0.86%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="AVAX" totalValue="2.87M" />,
              <PriceCell usdtPrice="39.265" usdPrice="39.265" />,
              <Button text="-1.38%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="ATOM" totalValue="2.89M" />,
              <PriceCell usdtPrice="10.578" usdPrice="10.578" />,
              <Button text="+0.65%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="UNI" totalValue="2.22M" />,
              <PriceCell usdtPrice="7.529" usdPrice="7.529" />,
              <Button text="-1.99%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="AXS" totalValue="1.95M" />,
              <PriceCell usdtPrice="8.254" usdPrice="8.254" />,
              <Button text="-2.97%" className="bg-[#DD524F]" />,
            ],
            [
              <TrandingCell tradingName="ETC" totalValue="1.97M" />,
              <PriceCell usdtPrice="27.131" usdPrice="27.131" />,
              <Button text="+2.65%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="BNB" totalValue="0.81M" />,
              <PriceCell usdtPrice="355.02" usdPrice="355.02" />,
              <Button text="+1.23%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="LTC" totalValue="0.55M" />,
              <PriceCell usdtPrice="71.00" usdPrice="71.00" />,
              <Button text="+0.35%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="ETH" totalValue="455.69K" />,
              <PriceCell usdtPrice="2957.64" usdPrice="2957.64" />,
              <Button text="+1.48%" className="bg-[#54AF71]" />,
            ],
            [
              <TrandingCell tradingName="BTC" totalValue="30.17K" />,
              <PriceCell usdtPrice="51804.89" usdPrice="51804.89" />,
              <Button text="-0.43%" className="bg-[#DD524F]" />,
            ],
          ]}
        />
      </div>
    </DefaultLayout>
  );
};

export default MarketPage;
