import { getStaticURL } from "@/utils/constants";

/* eslint-disable @next/next/no-img-element */
export const HelpCenterDetail = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-black">
      <img
        src={`${getStaticURL()}/assets/images/about.png`}
        alt="Logo"
        className="w-[98px] h-[98px]"
      />
      <div className="text-white">
        <p>
          We are now supporting different types of deposit methods for our
          users.
        </p>
        <p>(a) Crypto Transfer</p>
        <p>Note:</p>
        <p>
          — Please only deposit the supported coins using the supported chain.
        </p>
        <p>
          — We currently only supports direct transfer. Please do not transfer
          your assets using the Smart Contract method.
        </p>
        <p>
          — For coin deposits that require a deposit tag/memo, kindly be sure to
          fill in your deposit memo/tag correctly. You can find your memo/tag
          from the deposit window. Depositing without memo/tag or with the wrong
          memo/tag may lead to loss of assets. For more information, please
          refer to the Deposit FAQ.
        </p>
        <p>Deposit via App</p>
        <p>
          Step 1: Please click on Assets, located at the bottom right-hand
          corner of the page, and click on the Deposit button.
        </p>
        <p>
          Step 2: Select the currency, or enter your preferred currency in the
          search box to proceed to the next step.
        </p>
        <p>
          Step 3: On the Deposit page, you can either scan the QR code or copy
          the deposit address, and use it as the destination address to which
          you can send the funds.
        </p>
        <p>
          To change your default deposit account, you can head over to the
          deposit page. Click on Auto transfer of funds to, and select Spot
          Account or Derivatives Account.
        </p>
        <p>(b) Buy Crypto Using Fiat Currencies</p>
        <p>Please contact our online service.</p>
        <p>(i) Credit/Debit Card payment</p>
        <p>
          We has launched credit and debit card payments, allowing users to buy
          crypto directly with their credit or debit cards using fiat
          currencies. You’ll just need to link your credit/debit card to your
          account and purchase without going through any third-party channel.
          The process takes only 5 minutes, and is as simple as buying other
          regular products online.
        </p>
        <p>
          To purchase using a credit/debit card, head on over to our Buy Crypto.
          Please refer to [FAQ — Credit/Debit Payments for the supported
          currencies.
        </p>
        <p>To learn more, please refer to Buy - Credit/Debit Card Payment .</p>
      </div>
    </div>
  );
};
