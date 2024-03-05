/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { getStaticURL } from "@/utils/constants";

export const ArticleDetail = () => {
  return (
    <div className="p-4 flex flex-col gap-4 bg-black">
      <img
        className="w-[98px]"
        src={`${getStaticURL()}/assets/images/about.png`}
        alt="Logo"
      />
      <div className="text-white">
        <p>
            Stablecoins are cryptocurrencies whose values are pegged to a stable
            asset, mostly fiat currencies. Tether (USDT), USD Coin (USDC) and
            Binance USD (BUSD) are the three most popular stablecoins, with a
            combined market cap of $120 billion. However, with the recent buzz
            around BUSD, there’s no doubt that most investors would be curious to
            know if BUSD is still worth investing in — or if you should simply pile
            your investments into USDT, USDC or other stablecoins instead.
        </p>
        <p>While stablecoins are known to allow faster, lower-cost and safer transactions without the limitations associated with traditional banking, such as location-based restrictions and lack of financial services during holidays, investors nowadays are uncertain following the May 2022 collapse of TerraUSD (UST).</p>
        <p>Despite this, the global cryptocurrency market is forecasted to rise to above [$1.9 billion by 2028], proving the popularity of cryptocurrencies worldwide.</p>
        <p>Stablecoin is a type of cryptocurrency that’s more reliable and less volatile than its high-profile counterparts like Ethereum and Bitcoin, which means there’s more significant potential for safer investments.</p>
        <p>But which stablecoin should you trade? How do stablecoins compare to fiat currencies? Below, you’ll learn everything about the three main stablecoin supplies and how they differ from each other.</p>
        <h2 className="mb-4 text-white text-[24px] font-bold"><strong>What Are Stablecoins?</strong></h2>
        <p>A stablecoin is a cryptocurrency that has its value associated with another asset class, like gold or fiat currencies, to keep its price stable.</p>
        <p>According to Harvard Business Review, “True stablecoins are non-interest bearing coins designed to have stable value against a reference currency — say $1 [one U.S. dollar].” Although mainstream crypto assets like Bitcoin are beneficial because you don’t need to trust an intermediary institution, they’re highly susceptible to price fluctuations.</p>
        <p>Stablecoins eliminate this flaw by tying the currency’s value to another stable asset, mostly fiat currencies such as dollars or euros.</p>
        <p>The coin’s issuer has a “reserve” with assets that assure buyers the issuer can redeem the outstanding coins.</p>
        <p>The first stablecoin was created in 2014 and named Tether. Most other stablecoins are modeled after Tether, with users receiving a single token for every dollar.</p>
        <p>Theoretically, users can get their original currency — dollars — back at a 1:1 exchange rate. Initially, people used stablecoins to buy common cryptocurrencies, such as Bitcoin, as many exchanges didn’t have banking access.</p>
        <p>Thus, stablecoins were a more reliable option, available 24/7 worldwide, and without requiring reliance on traditional banking channels. In addition, money transfers are completed in a matter of seconds.</p>
        <h2 className="mb-4 text-white text-[24px] font-bold"><strong>What Factors Have Contributed to the Growth of Stablecoins?</strong></h2>
        <p>The use of smart contracts gave rise to the concept of stablecoin. Unlike many other currencies, the code in a smart contract helps refine the agreements of a contract to facilitate the seamless transfers, lending and payment of money, with limited human intervention.</p>
        <p>Still, the primary factor fueling the popularity of stablecoins is their almost negligible volatility as compared to conventional cryptocurrencies. On top of that, industry partnerships also contribute to the growth of stablecoins.</p>
        <p>For instance, in a recent corporate move, Visa partnered with Circle, the blockchain maestros behind USDC. This partnership allows Circle corporate cardholders to spend their USDC stablecoin at merchants who accept Visa.</p>
        <p>Even better, the U.S. Treasury’s Office of the Comptroller of the Currency (OCC) has released guidelines for banks to use stablecoins like USDC.</p>
        <p>Thus, federal savings associations and banking channels can now use blockchain for coins like USDC, just as with SWIFT transfers or ACH.</p>
        <p>The future seems bright for stablecoin holders, since the currency may offer a widely accepted payment method to cut costs on data processing and international transfers. Moreover, banks may use stablecoins to minimize the threat of digital challenges.</p>
        <p>It’s also likely that digital wallets such as Cash App and Venmo — which have recently enabled crypto purchasing — may use stablecoins in the future to make peer-to-peer (P2P) payments a breeze.</p>
        <h2 className="mb-4 text-white text-[24px] font-bold"><strong>Understanding USDT, USDC and BUSD</strong></h2>
        <p>Although there are dozens of different stablecoins, the three most common ones are USDT, USDC and BUSD.</p>
        <h3 className="mb-4 text-white text-[18px] font-bold">
            <strong>What Is USDT?</strong>
        </h3>
        <p>USDT (the symbol for Tether) is a stablecoin pegged to the U.S. dollar at a 1:1 exchange rate. Thus, one U.S. dollar is equivalent to one USDT. Buyers can spend, transfer or trade USDT as they would their regular fiat currency. Tether is issued by iFinex, the Hong Kong-registered company that also owns the crypto exchange Bitfinex.</p>
        <p>Initially, USDT was created to tackle the following issues:</p>
        <ul>
            <li>Make national currency transfers easier</li>
            <li>Offer a more stable version of the volatile Bitcoin</li>
            <li>Provide users a method for checking</li>
        </ul>
        <p>Tether is in the limelight as the third-biggest cryptocurrency in the world and continues to be the largest stablecoin by market cap in front of USDC.</p>
        <p>However, USDT is known not to be transparent about its reserves. In 2019, they claimed that every USDT is backed by one U.S. dollar in cash, held by the company, but in 2021, Tether (the company) was fined $41 million by the U.S. Commodity Futures Trading Commission (CFTC). This was due to Tether’s false claims that its USDT stablecoins were fully backed by real-world fiat money.</p>
        <p>Tether has since had an audit in May 2021 and updated its website to include more details about its cash reserves. A shocking revelation is that it only held 2.9% of its reserves in cash back then. However, that number has since increased, and Tether has begun releasing monthly transparency reports.</p>
        <p>Although a few controversies surround Tether’s stability at $1 and the actual amounts of U.S. dollars backing each USDT coin, there are still many reasons to prefer the coin over regular currency, as we’ll discuss below.</p>
        <h3 className="mb-4 text-white text-[18px] font-bold">
            <strong>What Is USDC?</strong>
        </h3>
            <p>USDC is another stablecoin with its price pegged to the U.S. dollar. It’s issued by Centre Consortium, LLC, which consists of Circle and Coinbase, to speed up fund transfer times and reduce volatility associated with Bitcoin and other cryptocurrencies.</p>
            <p>As an Ethereum token, USDC can be stored in a wallet compatible with blockchain. Besides facilitating transfers, USDC also allows users to benefit from higher yields when lending their stablecoins through different decentralized finance (DeFi) applications.</p>
            <p>The popularity of the USD coin has increased significantly in the past few years, with a daily average of $4 billion sent through the Ethereum network in March 2023. Its popularity has also landed itself partnerships with leading crypto exchanges, such as Crypto, to launch USDC Spot pairs to promote its adoption. To further support USDC, Crypto has recently also launched its USDC Party campaign with three events that users can participate in.</p>
            <p>{"["}</p>
            <p>{"!"}</p>
            <p>{"]"}</p>
            <p>USDC has since expanded to more networks, from Algorand, Avalanche, Solana and Tron to Hedera, Polygon and more, growing their adoption as crypto becomes multichain.</p>
            <p>USDC also has monthly attestations to prove that they have an equivalent amount of USD backing their USDC to assure investors that they’re fully backed. However, the recent news of the USDC depegging has left many uncertain.</p>
            <h3 className="mb-4 text-white text-[18px] font-bold">
                <strong>Depegging of USDC</strong>
            </h3>
            <p>It all started with the collapse of the Silicon Valley Bank, which held $3.3 billion (or 8%) of USDC reserves on Mar 10, 2023. While federal regulators stated that all depositors, including Circle, would be able to retrieve their funds, it didn’t stop USDC from depegging to a low of $0.869 on the Kraken exchange.</p>
            <p>Circle was then hit with another slew of unfortunate news over the weekend: the closure of Signature Bank resulted in its product, Signet, being closed too. This meant that Circle was no longer able to mint or redeem USDC through its Signet feature. Circle has clarified that it does not hold any USDC reserves with Signature Bank, and only uses it for transactions and settlements.</p>
            <p>According to an update by Circle on Mar 12, it holds $9.7 billion of its USDC reserves in cash, and $32.4 billion in short-dated government securities. Another $5.4 billion of the USDC cash reserves are held at Bank of New York Mellon Corp., and $1 billion at Customers Bank.</p>
            <p>Circle reported that it had tried to move its reserves out of Silicon Valley Bank on Mar 9, but this wasn’t done by Friday due to the closure. It holds hope that the transfer will be settled on Mar 13. If the reserves aren’t retrieved, Circle has promised to fill the gap using internal resources, as well as external investments if necessary.</p>
            <p>The hopeful news has caused USDC to inch closer to its peg, and as of Mar 13, 2023, its price is at $0.984.</p>
            <h3>
                <strong className="text-white text-[18px] font-bold">What Is BUSD?</strong>
            </h3>
            <p>Binance and Paxos founded BUSD to provide transactions with three important qualities: Speed, flexibility and accessibility.</p>
            <p>Simply put, Binance USD is a fiat-backed and regulated stablecoin with the same worth as a U.S. dollar. For every Binance USD someone buys, there’s a single dollar held in reserve. As the U.S. dollar’s price fluctuates, this stablecoin’s value also rises or falls accordingly. BUSD holders can exchange their stablecoins for U.S. dollars, and vice versa. Moreover, Binance USD exists on BNB Chain and Ethereum.</p>
            <p>Simply put, Binance USD is a fiat-backed and regulated stablecoin with the same worth as a U.S. dollar. For every Binance USD someone buys, there’s a single dollar held in reserve. As the U.S. dollar’s price fluctuates, this stablecoin’s value also rises or falls accordingly. BUSD holders can exchange their stablecoins for U.S. dollars, and vice versa. Moreover, Binance USD exists on BNB Chain and Ethereum.</p>
            <h3>
                <strong className="text-white text-[18px] font-bold">BUSD’s Ban</strong>
            </h3>
            <p>However, on Feb 13, 2023, it was announced that Paxos had received a Wells notice from the U.S. Securities and Exchange Commission (SEC) indicating that BUSD was considered to be an unregistered security. The New York Department of Financial Services (NYDFS) also revealed data showing that there were not enough reserves backing up the BUSD issued by Paxos, and thus stopped them from being minted or released. While Paxos denied the claims, it has since ceased the issuance of BUSD and ended its partnership with Binance.</p>
            <p>On Feb 22, 2023, BUSD’s price dropped to $0.20 on Binance following a single market sell order of $647,000. While it immediately regained its peg, it created an opportunity for arbitrage traders to purchase BUSD for under $1 on Binance and sell it on other exchanges for $1.</p>
            <p>As of Mar 1, 2023, more than $6 billion has been pulled out of BUSD. In the meantime, Binance has laid out plans to diversify its stablecoin away from BUSD. Binance has recently launched TrueFi perpetual contracts on its platform, and it’s minting more TUSD tokens as an attempt to meet their stablecoin needs.</p>
            <h2 className="mb-4 text-white text-[24px] font-bold">
                <strong>
                    USDT vs. USDC vs. BUSD: Differences
                </strong>
            </h2>
            <p>This table compares the differences between the three stablecoins that account for most of the stablecoin market.</p>
            <table className="mb-4">
                <tbody>
                    <tr>
                        <td className="py-4"></td>
                        <td className="py-4"><span>USDT</span></td>
                        <td className="py-4"><span>USDC</span></td>
                        <td className="py-4"><span>BUSD</span></td>
                    </tr>
                        <td className="py-4"><span><strong>Blockchain</strong></span></td>
                        <td className="py-4"><span>Ethereum, Solana, Tezos, Kusama, Algorand, Avalanche, Tron, Polygon, EOS.IO, Liquid</span></td>
                        <td className="py-4"><span>Ethereum, Tron, Hedera, Stellar, Algorand, Solana, Avalanche, Flow, Polygon</span></td>
                        <td className="py-4"><span>Ethereum, BNB Chain</span></td>
                    <tr>
                        <td className="py-4"><span><strong>Stablecoin Issuer</strong></span></td>
                        <td className="py-4"><span>Tether</span></td>
                        <td className="py-4"><span>Circle</span></td>
                        <td className="py-4"><span>Binance and Paxos</span></td>
                    </tr>
                    <tr>
                        <td className="py-4"><span><strong>Launch Year</strong></span></td>
                        <td className="py-4"><span>2014</span></td>
                        <td className="py-4"><span>2018</span></td>
                        <td className="py-4"><span>2019</span></td>
                    </tr>
                    <tr>
                        <td className="py-4"><span><strong>Collateral Type</strong></span></td>
                        <td className="py-4"><span>Fiat</span></td>
                        <td className="py-4"><span>Fiat</span></td>
                        <td className="py-4"><span>Fiat</span></td>
                    </tr>
                    <tr>
                        <td className="py-4"><span><strong>Market Cap Rank</strong></span></td>
                        <td className="py-4"><span>3</span></td>
                        <td className="py-4"><span>5</span></td>
                        <td className="py-4"><span>11</span></td>
                    </tr>
                    <tr>
                        <td className="py-4"><span><strong>Base Fiat Currency</strong></span></td>
                        <td className="py-4"><span>U.S. dollar</span></td>
                        <td className="py-4"><span>U.S. dollar</span></td>
                        <td className="py-4"><span>U.S. dollar</span></td>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>
            <h3 className="mb-4 text-white text-base font-bold">
                <strong>Growth</strong>
            </h3>
            <p>Back in May 2022, Tether started to lose its market cap against USDC, especially after UST was depegged. On May 9, UST started to depeg and, as investors worried about the risk of USDT, they also started selling it. Since then, USDT has lost $11 billion in market cap (a drop of about 15%) as holders began exchanging it with USDC instead, along with some also redeeming USDT into USD fiat. At one point, on May 12, USDT even depegged by around 4% on Binance. However, it quickly recovered back to its peg by the end of the day, as redemptions were fully met and investors were reassured.</p>
            <p>Due to this event, USDC’s market cap rose from $49 billion to $54 billion, an increase of about 10%. However, as of Mar 13, 2023, its market cap has decreased to about $40 billion due to the collapse of Silicon Valley Bank. Despite this, there’s no doubt that USDC has come a long way from just $4 billion in market cap at the start of 2021.</p>
            <p>Due to this event, USDC’s market cap rose from $49 billion to $54 billion, an increase of about 10%. However, as of Mar 13, 2023, its market cap has decreased to about $40 billion due to the collapse of Silicon Valley Bank. Despite this, there’s no doubt that USDC has come a long way from just $4 billion in market cap at the start of 2021.</p>
            <h3 className="mb-4 text-white text-base font-bold">
                <strong>Blockchains</strong>
            </h3>
            <p>One of the significant differences between these three major stablecoins is in their blockchains. A blockchain is a system that records transactions in a way that uses an immutable cryptographic signature to eliminate or minimize the risk of hacking or cheating the system.</p>
            <p>Having different blockchains results in a variety of advantages and disadvantages, such as the speed and utility of transactions. While USDT runs on only a single blockchain, USDC and BUSD have multiple blockchain options, allowing buyers to trade and transfer across them.</p>
            <h3 className="mb-4 text-white text-base font-bold">
                <strong>Stability</strong>
            </h3>
            <p>Although stablecoins achieve their price stability via collateralization of buying and selling the reference asset, they may fluctuate slightly from their token price, and then gradually return to the original value. USDT’s stability is quite reliable, as the stablecoin has managed to remain steady at around $1. Similarly, Binance USD and USDC are now also close to $1 despite recent events.</p>
            <p>However, the 2021 controversy surrounding Tether’s claim that it has enough dollar reserves (while economists and investors suspected that it didn’t), as well as the recent BUSD controversy that caused BUSD to slip to $0.20 on Binance, make both coins less reliable. Compared to USDT and BUSD, USDC is steady and devoid of controversy.</p>
            <h3 className="mb-4 text-white text-base font-bold">
                <strong>Stablecoin Supply and Volume</strong>
            </h3>
            <p>The “volume” of a stablecoin refers to the total trades occurring, while “liquidity” refers to the number of coins available for trading at the set price, which is $1 in this case. As the volume increases, typically, the liquidity does too.</p>
            <p>A stablecoin with a high volume makes it easier for investors to trade their coins. As of Mar 13, 2023, the daily trading volume for USDT is $63.3 billion, which is higher than that of the other two currencies. USDC has a volume of $9.3 billion, and the Binance USD stablecoin has a trading volume of $8 billion. The total stablecoin supply peaked at 180 billion, and has started to drop and is now at 133 billion. USDT remains the largest stablecoin by market cap, with a total circulating supply of over 72 billion USDT, while USDC has a circulating supply of 40.4 billion USDC and BUSD has a supply of 8.3 billion BUSD.</p>
            <h2 className="mb-4 text-white text-[24px] font-bold">
                <strong>Benefits of USDT, USDC and BUSD</strong>
                <p>Despite their differences, stablecoins have the following benefits:</p>
                <ul>
                    <li>
                        <strong>Quick Transactions:</strong>
                        {" "}Deposits in fiat currencies can take one to four business days to show in your bank account. In today’s fast-paced world, that’s relatively slow. Meanwhile, stablecoin transactions are instant.
                    </li>
                    <li>
                        <strong>Availability:</strong>
                        {" "}Conventional banking channels aren’t available during the weekends or public holidays. But stablecoin exchanges are possible 24/7 — anywhere in the world.
                    </li>
                    <li>
                        <strong>Transaction Fees:</strong>
                        {" "}Conventional transactions have high fees, especially international funds transfers. In contrast, stablecoins offer a low- or no-cost transaction method.
                    </li>
                    <li>
                        <strong>Stability:</strong>
                        {" "}Unlike other cryptocurrencies, such as Bitcoin or Dogecoin, the prices of stablecoins remain stable as the assets to which they’re pegged. For instance, if a stablecoin is pegged to euros, its price will remain the same as the fiat currency.
                    </li>
                    <li>
                        <strong>Transparency:</strong>
                        {" "}Most stablecoins are pretty transparent, allowing users to see that the issuers have enough assets in reserves to redeem them. For example, USDC has monthly attestation reports done by licensed institutions that can be viewed on the official Circle website.
                    </li>
                    <li>
                        <strong>Safety:</strong>
                        {" "}Blockchain technology makes transactions immensely secure, which is why many users consider stablecoins to be safer than traditional banking channels that are susceptible to hacking and malicious attacks.
                    </li>
                </ul>
            </h2>
            <h2 className="mb-4 text-white text-[24px] font-bold">
                <strong>Uses of Stablecoins</strong>
            </h2>
            <p>Stablecoins such as USDC can be used for multiple purposes, such as storing value, accessing yield in the market enabled by blockchain, and for payments. Here are some lucrative uses of stablecoins.</p>
            <h3 className="mb-4 text-white text-[18px] font-bold">
                <strong>
                    Trading Crypto Pairs
                </strong>
            </h3>
            <p>Typically, “trending pairs” in cryptocurrency refers to assets that users can trade for one another through an exchange.</p>
            <p>These pairs allow buyers to compare the costs of various digital assets. For instance, a [BTC/USDT crypto pair] will let you know how many USDT equals one BTC.</p>
            <p>When you have stablecoins, such as USDC and others, in your possession and want to trade them, you can check for the pairing on the exchange.</p>
            <h2 className="mb-4 text-white text-[24px] font-bold">
                <strong>DeFi Protocols for Lending</strong>
            </h2>
            <p>DeFi, or decentralized finance, refers to an ecosystem comprising blockchain-based financial applications that operate without a central administration or third party, such as a bank or other financial institution. Since DeFi employs a peer-to-peer model, everyone can connect irrespective of their location.</p>
            <p>With DeFi lending, you can lend your stablecoins to a borrower and earn interest. This benefits both borrowers and lenders, since users can get loans at much lower rates than if they used decentralized exchanges (DEXs). Meanwhile, long-term investors can earn interest rates on the coins they lend.</p>
            <h3 className="mb-4 text-white text-[18px] font-bold">
                <strong>Providing Liquidity</strong>
            </h3>
            <p>With AMM DEXs (automated market maker decentralized exchanges) gaining popularity, users can provide liquidity with their USDC on their favorite pairs, such as ETH/USDC, and earn trading fees as well as other incentives.</p>
            <p>Some of the most popular AMM DEXs include Uniswap and SushiSwap on the Ethereum network, passively generating millions in revenue for liquidity providers. However, the downside is that liquidity providers may incur an impermanent loss with their USDC.</p>
            <h2 className="mb-4 text-white text-[24px] font-bold">
                <strong>The Future of Stablecoins</strong>
            </h2>
            <p>Due to the fallout from UST’s depegging and crash affecting thousands of users all over the world, the lack of transparency in USDT — which is the biggest stablecoin in crypto — and the ban of BUSD, regulations will likely be a big topic moving forward.</p>
            <p>{"Stablecoins operate outside of the U.S.'s financial system, and as they get bigger and more mainstream, policymakers and regulators will pay more attention to them to protect the average Joe and prevent systemic risks."}</p>
            <p>The U.S. Federal Reserve and agencies of other nations are working on offering their own central bank digital currencies (CBDCs), and depending on how they view stablecoins, it could affect the entire crypto market in the future. With rising interest rates and high inflation all around the world, especially in developing countries, a regulated USD stablecoin is likely to receive a lot of attention and adoption.</p>
            <h2 className="mb-4 text-white text-[24px] font-bold">
                <strong>Which Stablecoin Should You Choose?</strong>
            </h2>
            <p>Although USDT has a high market cap and volume, most economists (interestingly enough) may not consider it to be the best stablecoin. The reasons behind this lack of trust are the gaps in transparency and auditing of USDT.</p>
            <p>USDC has greater transparency than USDT. Moreover, it’s comparable to USDT in terms of its exchange rate and blockchain. Thus, USDT is a better pick for people who prefer investing in a cryptocurrency with a higher volume and liquidity, while USDC is preferable if you value transparency.</p>
            <h3 className="mb-4 text-white text-[18px] font-bold">
                <strong>The Bottom Line</strong>
            </h3>
            <p>Comprising almost 90% of the stablecoin market cap, USDC and USDT are undoubtedly the ideal options for investors who want to dabble in the stablecoin market. Since the future of BUSD is still unknown, we’d recommend doing your own research before investing in it.</p>
            <p>With vendors becoming comfortable with the idea of using stablecoins, the future of this cryptocurrency class looks hopeful. So if you’re planning to jump on the bandwagon, now is a great time to do so.</p>

      </div>
    </div>
  );
};
