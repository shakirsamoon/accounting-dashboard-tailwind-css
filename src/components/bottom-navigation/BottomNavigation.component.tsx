import BottomNavigationTabs from "./BottomNavigationTabs.component";
import BottomNavigationVector from "./BottomNavigationVector.component";

const BottomNavigation = () => {
  return (
    <div className="relative flex items-center justify-between h-20 px-5 py-3 mx-5 bg-black rounded-b-3xl">
      <span className="ml-5 text-xl font-semibold text-gray-100">ACC Dashboard</span>
      <BottomNavigationTabs />
      <div className="absolute right-12 -top-0.5">
        <BottomNavigationVector />
      </div>
    </div>
  );
}

export default BottomNavigation;