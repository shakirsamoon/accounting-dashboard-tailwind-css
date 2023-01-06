import BlockTitleLayout from "./BlockTitleLayout.component";

const PayableOwingBlock = () => {
  const data = [
    {
      key: 1,
      title: 'Invoices payable to you',
      records: [
        {
          key: 11,
          label: 'Coming Due',
          value: '0.00',
        },
        {
          key: 12,
          label: '1.30 days overdue',
          value: '0.00',
        },
        {
          key: 13,
          label: '31-60 overdue',
          value: '0.00',
        },
      ]
    },
    {
      key: 2,
      title: 'Bills you owe',
      records: [
        {
          key: 21,
          label: 'Coming Due',
          value: '0.00',
        },
        {
          key: 22,
          label: '1.30 days overdue',
          value: '0.00',
        },
        {
          key: 23,
          label: '31-60 overdue',
          value: '0.00',
        },
      ]
    }
  ];

  return (
    <section className="pt-8">
      <BlockTitleLayout title="Payable & Owing" />
      <div className="flex gap-2">
        {
          data.map(item => (
            <div className="w-1/2" key={item.key}>
              <h3 className="px-3 mt-2 text-sm font-semibold">{item.title}</h3>
              {
                item.records.map(r => (
                  <div className="flex px-3 py-2 mt-2 border-2 border-black border-solid rounded-xl" key={r.key}>
                    <p className="w-1/2 text-sm text-left">${r.value}</p>
                    <p className="w-1/2 text-sm text-right">${r.value}</p>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default PayableOwingBlock;