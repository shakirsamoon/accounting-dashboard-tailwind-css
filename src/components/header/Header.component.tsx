import HeaderRight from "./HeaderRight.component";
import HeaderTabs from "./HeaderTabs.component";

const Header = () => {
  return (
    <div className="border-b-2 border-gray-500 border-solid">
      <header className="flex mb-2">
        <div className="w-1/2 mx-0 my-auto pad">
          <h1 className="ml-1 text-2xl font-semibold">Accounting</h1>
        </div>
        <HeaderRight />
      </header>
      <HeaderTabs />
    </div>
  );
}

export default Header;