import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface IDropdownProps {
  text: string
}

const Dropdown: FC<IDropdownProps> = ({ text }) => {
  return (
    <div className="flex justify-between items-center gap-2 px-4 py-1.5 border-2 border-solid border-gray-700 rounded-xl shadow-[2px_4px_#5a5a5a] cursor-pointer hover:border-black hover:shadow-[2px_4px_#000] text-gray-700 hover:text-black">
      <p className="text-xs">{text}</p>
      <ChevronDownIcon className="w-4 h-4 text-black" />
    </div>
  );
}

export default Dropdown;