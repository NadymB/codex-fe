import { Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
interface IProp {
  tabs: {
    name: string;
    content: any;
  }[];
  classNameItem?: string;
  classNameTab?: string;
}
const Tabs = ({ tabs, classNameItem,classNameTab }: IProp) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const tab = tabRefs.current[activeTab];
    if (tab) {
      const { offsetLeft, offsetWidth } = tab;
      setTabPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  const changeTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="overflow-x-hidden">
      <div className={`${classNameTab}`}>
        <div className="flex relative">
          {tabs.map((tab: any, index) => (
            <Button
              key={index}
              ref={(element) => (tabRefs.current[index] = element)}
              className={`${classNameItem} tab-button ${activeTab === index ? "text-[#3D5AFE]" : "text-[#fff]"} font-medium px-4 py-3 rounded-[0px] normal-case`}
              onClick={() => changeTab(index)}
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
      <div className="mt-4">
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
