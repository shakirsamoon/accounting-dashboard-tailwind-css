import CashFlowBlock from "./components/blocks/CashFlowBlock.component";
import NetIncomeBlock from "./components/blocks/NetIncomeBlock.component";
import PayableOwingBlock from "./components/blocks/PayableOwingBlock.component";
import ProfitLossBlock from "./components/blocks/ProfitLossBlock.component";
import BottomNavigation from "./components/bottom-navigation/BottomNavigation.component";
import Header from "./components/header/Header.component";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="px-6 py-5 bg-white rounded-2xl h-[calc(100%_-_70px)] relative">
        <Header />
        <main className="flex max-h-full gap-8 mt-5 overflow-y-auto h-[calc(100%_-_100px)]">
          <div className="w-1/2">
            <CashFlowBlock />
            <NetIncomeBlock />
          </div>
          <div className="w-1/2">
            <ProfitLossBlock />
            <PayableOwingBlock />
          </div>
        </main>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default App;
