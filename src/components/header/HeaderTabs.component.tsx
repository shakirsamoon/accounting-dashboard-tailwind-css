import { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      key: 1,
      title: 'Overview'
    }, {
      key: 2,
      title: 'Transactions'
    }, {
      key: 3,
      title: 'Reports'
    },
    {
      key: 4,
      title: 'Hire Bookkeeper'
    }
  ];

  const onTabClick = (key: number) => {
    setActiveTab(key);
  }

  return (
    <div className="flex -mb-0.5 relative">
      {
        tabs.map(tab => (
          <h2 onClick={() => onTabClick(tab.key)} className={`px-5 pb-2 cursor-pointer font-semibold text-sm ${tab.key === activeTab ? `border-b-4 border-green-600 border-solid rounded-sm text-black` : `text-gray-400`}`} key={tab.key}>{tab.title}</h2>
        ))
      }
    </div>
  );
}

export default HeaderTabs;