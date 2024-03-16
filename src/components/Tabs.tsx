import { Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
interface IProp {
  tabs: {
    name: string;
    content: any;
  }[];
  classNameItem?: string;
  classNameTab?: string;
  onChange: (value: number) => void;
  activeTab: number;
}
const Tabs = ({ tabs, classNameItem, classNameTab, onChange, activeTab  }: IProp) => {
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const tab = tabRefs.current[activeTab];
    if (tab) {
      const { offsetLeft, offsetWidth } = tab;
      setTabPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div>
      <div className={`${classNameTab} overflow-x-hidden`}>
        <div className="flex relative">
          {tabs.map((tab: any, index) => (
            <Button
              sx={{ textTransform: "none" }}
              key={index}
              ref={(element) => (tabRefs.current[index] = element)}
              className={`${classNameItem} tab-button ${activeTab === index ? "text-[#3D5AFE]" : "text-[#999]"} font-medium px-4 py-3 rounded-[0px] normal-case`}
              onClick={() => onChange(index)}
            >
              {tab.name}
            </Button>
          ))}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-[#3D5AFE] transition-transform duration-300"
            style={{
              width: `${tabPosition.width}px`,
              transform: `translateX(${tabPosition.left}px)`,
            }}
          />
        </div>
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{ display: activeTab === index ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
