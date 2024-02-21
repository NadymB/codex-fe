import React, { useState, useRef, useEffect } from 'react';
interface IProp{
    tabs:{
        name:string,
        content:any
    }[]
}
const Tabs = ({ tabs }:IProp) => {
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

  const changeTab = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex relative">
        {tabs.map((tab:any, index) => (
          <button
            key={index}
            ref={(element) => tabRefs.current[index] = element}
            className={`tab-button ${activeTab === index ? "text-[#3D5AFE]":"text-[#fff]"} font-medium px-4 py-3`}
            onClick={() => changeTab(index)}
          >
            {tab.name}
          </button>
        ))}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[#3D5AFE] transition-transform duration-300"
          style={{ width: `${tabPosition.width}px`, transform: `translateX(${tabPosition.left}px)` }}
        />
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
