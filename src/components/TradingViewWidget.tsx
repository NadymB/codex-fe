"use client";
import React, { useEffect, useRef, memo } from "react";

interface Props {
  symbol: string;
  locale: string;
}
function TradingViewWidget(props: Props) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.symbol && props.locale) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${props.symbol}",
        "interval": "15",
        "locale": "${props.locale}",

        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "calendar": false,
        "withdateranges": true,
        "support_host": "https://www.tradingview.com"
      }`;

      if (container.current && container.current.childNodes.length === 0) {
        container.current.appendChild(script);
        console.log(script);
        
      }
    }
  }, [props]);

  return (
    <div
      className=" h-[70vh]"
      ref={container}
    >
     
    </div>
  );
}

export default memo(TradingViewWidget);
