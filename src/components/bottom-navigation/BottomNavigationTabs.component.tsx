import { BuildingLibraryIcon, ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon, EnvelopeIcon, HomeIcon, PlayCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const BottomNavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      key: 1,
      icon: <HomeIcon className='w-7 h-7' />
    },
    {
      key: 2,
      icon: <BuildingLibraryIcon className='w-7 h-7' />
    },
    {
      key: 3,
      icon: <ChartBarIcon className='w-7 h-7' />
    },
    {
      key: 4,
      icon: <CurrencyDollarIcon className='w-7 h-7' />
    },
    {
      key: 5,
      icon: <DocumentTextIcon className='w-7 h-7' />
    },
    {
      key: 6,
      icon: <UserGroupIcon className='w-7 h-7' />
    },
    {
      key: 7,
      icon: <EnvelopeIcon className='w-7 h-7' />
    },
    {
      key: 8,
      icon: <PlayCircleIcon className='w-7 h-7' />
    }
  ];

  const onTabClick = (key: number) => {
    setActiveTab(key);
  }

  return (
    <div className='absolute flex gap-2 -translate-x-1/2 left-1/2'>
      {
        tabs.map(tab => (
          <div className={`p-3 rounded-xl cursor-pointer ${activeTab === tab.key ? `text-green-400 bg-gray-800` : `text-gray-500`}`} key={tab.key} onClick={() => onTabClick(tab.key)}>
            {tab.icon}
          </div>
        ))
      }
    </div>
  );
}

export default BottomNavigationTabs;