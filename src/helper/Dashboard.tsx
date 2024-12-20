import { useState } from "react";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [button, setButton] = useState("refresh");

  const buttons = [
    { id: 1, label: "Repositories", icon: "/repo.svg" },
    { id: 2, label: "AI Code Review", icon: "/ai.svg" },
    { id: 3, label: "Cloud Security", icon: "/cloud.svg" },
    { id: 4, label: "How to Use", icon: "/book.svg" },
    { id: 5, label: "Settings", icon: "/setting.svg" },
  ];

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row relative">
      {/* Left Side - Mobile Navbar */}
      <div className="lg:hidden flex flex-col">
        {/* Top Navbar */}
        <div className="w-full h-[50px] flex items-center justify-between px-4 bg-white fixed z-20">
          <div className="flex flex-row gap-3">
            <img src="/logo2.svg" alt="logo" />
            <div className="text-2xl font-normal text-[#181D27]">
              CodeAnt AI
            </div>
          </div>
          {/* Hamburger Button */}
          <button
            onClick={() => setSidebarVisible(!isSidebarVisible)}
            className="focus:outline-none"
          >
            <img src="/hamburger.svg" alt="hamburger" />
          </button>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarVisible && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={() => setSidebarVisible(false)}
            ></div>
            <div className="fixed top-[50px] left-0 w-full bg-white z-20 shadow-lg">
              <div className="flex flex-col p-4 gap-4">
                {/* Main Buttons */}
                <button className="py-2 w-full rounded border flex justify-between items-center gap-2 border-gray-200">
                  <div className="text-sm font-normal">Utkarsh Dhariya</div>
                  <img src="/down.svg" alt="down" />
                </button>
                <div className="flex flex-col gap-1">
                  {buttons.map((button) => (
                    <button
                      key={button.id}
                      onClick={() => setActiveButton(button.id)}
                      className={`py-2 w-full rounded flex justify-start items-center gap-2 ${
                        activeButton === button.id
                          ? "bg-blue-500 text-white"
                          : "text-[#414651]"
                      }`}
                    >
                      <img src={button.icon} alt={button.label} />
                      <div className="text-sm font-normal">{button.label}</div>
                    </button>
                  ))}
                </div>

                {/* Bottom Buttons */}
                <div className="flex flex-col gap-1">
                  <button className="py-2 w-full rounded flex justify-start items-center gap-2">
                    <img src="/support.svg" alt="support" />
                    <div className="text-sm font-normal text-[#414651]">
                      Support
                    </div>
                  </button>
                  <button className="py-2 w-full rounded flex justify-start items-center gap-2">
                    <img src="/logout.svg" alt="logout" />
                    <div className="text-sm font-normal text-[#414651]">
                      Logout
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Left Side - Desktop Sidebar */}
      <div className="w-full hidden lg:w-1/5 lg:flex flex-col lg:h-screen">
        <div className="w-full h-[50px] mt-10 flex flex-col items-center">
          <div className="flex flex-row gap-2">
            <img src="/logo2.svg" alt="logo" />
            <div className="text-2xl font-normal text-[#181D27]">CodeAnt AI</div>
          </div>
        </div>

        <div className="w-full flex-grow flex flex-col justify-between items-center">
          <div className="w-[202px] flex flex-col gap-1">
            <button className="py-2 w-full rounded border flex justify-center items-center gap-2 border-gray-200">
              <div className="text-sm font-normal">Utkarsh Dhariya</div>
              <img src="/down.svg" alt="down" />
            </button>
            <div className="flex flex-col gap-1 mt-4 w-full">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`py-2 w-full rounded flex justify-center items-center gap-2 ${
                    activeButton === button.id
                      ? "bg-blue-500 text-white"
                      : "text-[#414651]"
                  }`}
                >
                  <img src={button.icon} alt={button.label} />
                  <div className="text-sm font-normal">{button.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="w-[202px] flex flex-col gap-1 mb-5">
            <button className="py-2 w-full rounded flex justify-center items-center gap-2">
              <img src="/support.svg" alt="support" />
              <div className="text-sm font-normal text-[#414651]">Support</div>
            </button>
            <button className="py-2 w-full rounded flex justify-center items-center gap-2">
              <img src="/logout.svg" alt="logout" />
              <div className="text-sm font-normal text-[#414651]">Logout</div>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full flex-grow bg-[#e6e5e5] lg:w-4/5 min-h-full lg:p-4  mt-[50px] lg:mt-0">
  <div className="h-full w-full rounded-xl bg-white overflow-y-auto">
    {/* Content inside the red box */}
    <div className="w-full h-[156px] flex flex-col justify-center p-4">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Left Side */}
        <div className="flex flex-col">
          <div className="text-[#181D27] text-xl font-semibold">
            Repositories
          </div>
          <div className="text-[#414651] text-sm">33 total repositories</div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-row gap-4 mt-4 lg:mt-0">
  <button
    onClick={() => setButton("refresh")}
    className={`flex flex-row gap-2 px-4 py-2 border rounded-lg text-sm font-medium ${
      button === "refresh"
        ? "bg-[#1570EF] text-white border-[#1570EF]"
        : "bg-white text-[#414651] border-gray-500"
    }`}
  >
    <img src="/refresh.svg" alt="refresh" />
    <div>Refresh All</div>
  </button>
  <button
    onClick={() => setButton("add")}
    className={`flex flex-row gap-2 px-4 py-2 border rounded-lg text-sm font-medium ${
      button === "add"
        ? "bg-[#1570EF] text-white border-[#1570EF]"
        : "bg-white text-[#414651] border-gray-500"
    }`}
  >
    <img src="/add.svg" alt="add" />
    <div>Add Repository</div>
  </button>
</div>

      </div>
      <div className="mt-4">
      <div className="w-full md:w-[366px] h-[44px] flex items-center gap-2 px-4 rounded-lg border border-gray-300 bg-white">
  <img src="/search.svg" alt="search" className="w-5 h-5" />
  <input
    type="text"
    placeholder="Search Repositories"
    className="w-full outline-none text-sm font-normal text-[#414651] bg-transparent"
  />
</div>

</div>
    </div>

    
    <div className="w-full h-auto border border-gray-300  shadow-sm p-4  hover:bg-[#FAFAFA] transition-colors">
  {/* Title Section */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="text-gray-800 font-semibold text-lg">Design-system</div>
    <div className="border border-blue-500 bg-sky-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">
      Public
    </div>
  </div>

  {/* Details Section */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    {/* Technology */}
    <div className="flex items-center gap-2">
      <span className=" text-gray-500">React</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

    </div>

    {/* Size */}
    <div className="flex items-center gap-2">
      <img src="/size.svg" alt="size" className="w-4 h-4" />
      <span>7320 KB</span>
    </div>

    {/* Last Updated */}
    <div>
      <span className="text-gray-500">Updated 1 day ago</span>
    </div>
  </div>
</div>
<div className="w-full h-auto border border-gray-300  shadow-sm p-4  hover:bg-[#FAFAFA] transition-colors">
  {/* Title Section */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="text-gray-800 font-semibold text-lg">Code-ant-ai</div>
    <div className="border border-blue-500 bg-sky-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">
      Private
    </div>
  </div>

  {/* Details Section */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    {/* Technology */}
    <div className="flex items-center gap-2">
      <span className=" text-gray-500">javascript</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

    </div>

    {/* Size */}
    <div className="flex items-center gap-2">
      <img src="/size.svg" alt="size" className="w-4 h-4" />
      <span>5871 KB</span>
    </div>

    {/* Last Updated */}
    <div>
      <span className="text-gray-500">Updated 2 day ago</span>
    </div>
  </div>
</div>

<div className="w-full h-auto border border-gray-300  shadow-sm p-4  hover:bg-[#FAFAFA] transition-colors">
  {/* Title Section */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="text-gray-800 font-semibold text-lg">analytics-dashboard</div>
    <div className="border border-blue-500 bg-sky-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">
      Private
    </div>
  </div>

  {/* Details Section */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    {/* Technology */}
    <div className="flex items-center gap-2">
      <span className=" text-gray-500">Python</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

    </div>

    {/* Size */}
    <div className="flex items-center gap-2">
      <img src="/size.svg" alt="size" className="w-4 h-4" />
      <span>4521 KB</span>
    </div>

    {/* Last Updated */}
    <div>
      <span className="text-gray-500">Updated 5 day ago</span>
    </div>
  </div>
</div>

<div className="w-full h-auto border border-gray-300  shadow-sm p-4  hover:bg-[#FAFAFA] transition-colors">
  {/* Title Section */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="text-gray-800 font-semibold text-lg">mobile-app</div>
    <div className="border border-blue-500 bg-sky-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">
      Public
    </div>
  </div>

  {/* Details Section */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    {/* Technology */}
    <div className="flex items-center gap-2">
      <span className=" text-gray-500">Swift</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

    </div>

    {/* Size */}
    <div className="flex items-center gap-2">
      <img src="/size.svg" alt="size" className="w-4 h-4" />
      <span>3096 KB</span>
    </div>

    {/* Last Updated */}
    <div>
      <span className="text-gray-500">Updated 3 day ago</span>
    </div>
  </div>
</div>

<div className="w-full h-auto border border-gray-300  shadow-sm p-4  hover:bg-[#FAFAFA] transition-colors">
  {/* Title Section */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="text-gray-800 font-semibold text-lg">e-commerce-platform</div>
    <div className="border border-blue-500 bg-sky-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">
      Private
    </div>
  </div>

  {/* Details Section */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    {/* Technology */}
    <div className="flex items-center gap-2">
      <span className=" text-gray-500">Java</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

    </div>

    {/* Size */}
    <div className="flex items-center gap-2">
      <img src="/size.svg" alt="size" className="w-4 h-4" />
      <span>6210 KB</span>
    </div>

    {/* Last Updated */}
    <div>
      <span className="text-gray-500">Updated 6 day ago</span>
    </div>
  </div>
</div>
<div className="w-full h-auto border border-gray-300  shadow-sm p-4  hover:bg-[#FAFAFA] transition-colors">
  {/* Title Section */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="text-gray-800 font-semibold text-lg">blog-website</div>
    <div className="border border-blue-500 bg-sky-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">
      Public
    </div>
  </div>

  {/* Details Section */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    {/* Technology */}
    <div className="flex items-center gap-2">
      <span className=" text-gray-500">HTML/CSS</span>
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

    </div>

    {/* Size */}
    <div className="flex items-center gap-2">
      <img src="/size.svg" alt="size" className="w-4 h-4" />
      <span>1876 KB</span>
    </div>

    {/* Last Updated */}
    <div>
      <span className="text-gray-500">Updated 4 day ago</span>
    </div>
  </div>
</div>



   
    
  </div>
</div>
    </div>
  );
};

export default Dashboard;
