import Dropdown from "../Dropdown.component";
import BlockTitleLayout from "./BlockTitleLayout.component";
import ProfitLossChart from "./ProfitLossChart.component";

const ProfitLossBlock = () => {
  return (
    <section className="pt-3">
      <BlockTitleLayout title="Profit and Loss">
        <Dropdown text='View Report' />
        <Dropdown text='1-6 Months' />
      </BlockTitleLayout>
      <p className="my-4 text-sm">Income and Expenses on (includes unpaid invoice and bills)</p>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-lime-400"></div>
          <p className="text-xs">Inflow</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-indigo-300 rounded-full"></div>
          <p className="text-xs">Outflow</p>
        </div>
      </div>

      <div className="flex justify-between p-4 mx-auto my-2 bg-black rounded-2xl shadow-[10px_10px_#B0B0B0] w-max h-60 gap-6">
        <div className="flex flex-col items-start text-center">
          <span className="text-5xl font-semibold text-lime-400">192</span>
          <span className="text-xs font-semibold text-gray-300">Inflow today</span>
        </div>
        <ProfitLossChart />
      </div>
    </section>
  );
}

export default ProfitLossBlock;