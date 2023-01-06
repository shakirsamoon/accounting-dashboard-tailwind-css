import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { BellIcon, CalendarDaysIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import HeaderButton from "./HeaderButton.component";

const HeaderRight = () => {
  return (
    <div className="flex items-center justify-between w-1/2">
      <div className="flex mx-2">
        <div className="relative">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-900 absolute left-2.5 top-3" />
          <input type="text" className="w-60 h-10 py-1 pl-8 pr-2 border-solid border-2 border-gray-700 rounded-full focus:outline-none shadow-[0_3px_#5a5a5a] focus:border-black focus:shadow-[0_3px_#000] text-sm" placeholder="Search" />
        </div>
        <div className="flex items-center justify-around gap-3 mx-5">
          <HeaderButton title='Calender'>
            <CalendarDaysIcon className="w-5 h-5" />
          </HeaderButton>
          <HeaderButton title='Notifications'>
            <BellIcon className="w-5 h-5" />
            <div className="w-2 h-2 bg-red-500 border border-black border-solid rounded-full absolute top-2 right-1.5" />
          </HeaderButton>
          <HeaderButton title='Inbox'>
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
          </HeaderButton>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-1 rounded-full cursor-pointer hover:bg-gray-200">
        <img className="rounded-full h-9 w-9" src='/images/profile.jpg' alt='Profile' />
        <ChevronDownIcon className="w-3 h-3 text-black" />
      </div>
    </div>
  );
}

export default HeaderRight;