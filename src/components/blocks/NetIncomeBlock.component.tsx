import BlockTitleLayout from "./BlockTitleLayout.component";

const NetIncomeBlock = () => {
  const incomeData = [
    {
      key: 1,
      title: 'Income',
      value1: 44491.53,
      value2: 244834.70,
    },
    {
      key: 2,
      title: 'Expense',
      value1: 162383.46,
      value2: 242466.60,
    },
    {
      key: 3,
      title: 'Net Income',
      value1: -117891.93,
      value2: 2368.10,
    }
  ];

  return (
    <section className="pt-8">
      <BlockTitleLayout title="Net Income" />
      <div className="flex pt-1 pb-2">
        <span className="w-2/6 text-sm font-semibold">Financial Year</span>
        <span className="w-2/6 text-sm font-semibold text-center">2020</span>
        <span className="w-2/6 text-sm font-semibold text-center">2021</span>
      </div>
      <div className="flex flex-col gap-2">
        {
          incomeData.map(item => (
            <div className="flex py-3 pl-5 pr-3 border-2 border-black border-solid rounded-xl" key={item.key}>
              <p className="w-2/6 text-sm">{item.title}</p>
              <p className="w-2/6 text-sm text-center">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.value1)}</p>
              <p className="w-2/6 text-sm text-center">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.value2)}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default NetIncomeBlock;