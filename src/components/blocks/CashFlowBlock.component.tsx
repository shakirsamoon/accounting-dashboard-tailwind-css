import Dropdown from "../Dropdown.component";
import BlockTitleLayout from "./BlockTitleLayout.component";
import { useState } from 'react';
import { ArrowDownLeftIcon, ArrowsPointingInIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";

const CashFlowBlock = () => {
  const dateFilters = ["Nov 20", "Dec 20", "Jan 20", "Feb 20", "Mar 20", "Apr 20", "May 20"];

  const cashFlowData = [
    {
      key: 1,
      icon: <ArrowDownLeftIcon className="w-4 h-4" />,
      text: 'Inflow',
      value: '$8000',
      classes: 'bg-lime-300'
    },
    {
      key: 2,
      icon: <ArrowUpRightIcon className="w-4 h-4" />,
      text: 'Outflow',
      value: '$12000',
      classes: 'bg-indigo-300'
    },
    {
      key: 3,
      icon: <ArrowsPointingInIcon className="w-4 h-4" />,
      text: 'Net Changes',
      value: '$2000',
      classes: 'text-white bg-black'
    }
  ];

  const [filterDate, setFilterDate] = useState(dateFilters[0]);

  const onDateFilterClick = (value: string) => {
    setFilterDate(value);
  }

  return (
    <section className="pt-3">
      <BlockTitleLayout title="Cash Flow">
        <Dropdown text='1-6 Months' />
        <Dropdown text='View Report' />
      </BlockTitleLayout>

      <p className="py-4 text-sm">Cash coming in and going out of you business</p>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-lime-400"></div>
          <p className="text-xs">Inflow</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-indigo-300 rounded-full"></div>
          <p className="text-xs">Outflow</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          <p className="text-xs">Net Changes</p>
        </div>
      </div>

      <div className="flex justify-around mx-2 mt-2 mb-5 text-center">
        {
          cashFlowData.map(item => (
            <div className={`flex flex-col gap-1 items-center justify-center w-36 h-32 rounded-xl border-2 border-black border-solid shadow-[5px_6px_#5a5a5a] ${item.classes}`} key={item.key}>
              {item.icon}
              <span className="pt-0.5 text-xs">{item.text}</span>
              <p className="font-bold">{item.value}</p>
            </div>
          ))
        }
      </div>

      <div className="flex justify-between">
        {
          dateFilters.map((value, index) => (
            <div className={`rounded-full px-3 py-1 text-xs cursor-pointer ${filterDate === value ? `bg-black text-white shadow-[1px_2px_#5a5a5a]` : `text-black`}`} key={index} onClick={() => onDateFilterClick(value)}>{value}</div>
          ))
        }
      </div>
    </section>
  );
}

export default CashFlowBlock;