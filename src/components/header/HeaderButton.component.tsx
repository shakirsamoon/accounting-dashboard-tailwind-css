import { FC, PropsWithChildren } from 'react';

interface IHeaderButtonProps extends PropsWithChildren {
  title: string
}

const HeaderButton: FC<IHeaderButtonProps> = ({ children, title }) => {
  return (
    <button title={title} className="border-2 border-solid border-gray-700 text-gray-700 h-9 w-9 rounded-full flex justify-center items-center hover:bg-gray-300 hover:text-black relative shadow-[0_3px_#5a5a5a] hover:border-black hover:shadow-[0_3px_#000]">
      {children}
    </button>
  );
}

export default HeaderButton;