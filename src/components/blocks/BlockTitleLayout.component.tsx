import { FC, PropsWithChildren } from 'react';

interface IBlockLayoutProps extends PropsWithChildren {
  title: string;
}

const BlockTitleLayout: FC<IBlockLayoutProps> = ({ children, title }) => {
  return (
    <div className='flex justify-between'>
      <h3 className='text-lg font-bold tracking-wide'>{title}</h3>
      <div className='flex gap-4 mr-3'>
        {children}
      </div>
    </div>
  );
}

export default BlockTitleLayout;