import { useState } from "react";

const Signin = () => {
  const [selected, setSelected] = useState("SAAS");

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      {/* Left */}
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center">
        {/* Main box */}
        <div className="h-[322px] w-[90%] max-w-[474px] relative">
          {/* 1st box */}
          <div className="bg-white shadow-xl flex flex-col rounded-xl h-[170px] w-full absolute top-0 left-0 p-4">
            {/* 1st line */}
            <div className="flex flex-row gap-2 items-start">
              <img src="/logo2.svg" alt="logo" />
              <div className="text-[#081735] text-[18px] font-bold">
                AI to Detect & Autofix Bad Code
              </div>
            </div>
            <hr className="border-gray-300 my-4" />
            {/* 2nd line */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="text-[#081735] text-xl font-bold">30K+</div>
                <div className="text-sm text-center">Language Support</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[#081735] text-xl font-bold">10K+</div>
                <div className="text-sm text-center">Developers</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[#081735] text-xl font-bold">100K+</div>
                <div className="text-sm text-center">Hours Saved</div>
              </div>
            </div>
          </div>
          {/* 2nd box */}
          <div className="h-[164px] w-[90%] max-w-[270px] bg-white shadow-lg rounded-xl absolute bottom-0 right-0 p-4">
            <div className="flex justify-between items-start">
              <img src="/file.svg" alt="fileimage" className="w-16 h-16" />
              <div className="flex flex-col items-end">
                <div className="text-[#0049C6] text-lg font-bold">↑ 14%</div>
                <div className="text-sm">This week</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-lg font-bold">Issues Fixed</div>
              <div className="text-[#081735] font-bold text-3xl">500K+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo at bottom left */}
      <div className="hidden md:block absolute bottom-4 left-4">
        <img src="/logo.svg" alt="logo" className="h-48" />
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 bg-[#FAFAFA] flex flex-col items-center justify-center min-h-screen px-4">
        <div className="shadow-xl bg-white rounded-xl h-auto max-w-full w-[90%] md:w-[600px] p-6">
          <div className="flex flex-col items-center w-full">
            {/* Logo and Title */}
            <div className="flex flex-row items-center gap-2 mb-4">
              <img src="/logo2.svg" alt="logo" />
              <div className="text-[#081735] font-normal text-xl">CodeAnt AI</div>
            </div>

            {/* Welcome Text */}
            <div className="text-[#181D27] text-lg md:text-xl mb-6 font-semibold text-center">
              Welcome to CodeAnt AI
            </div>

            {/* Toggle Buttons */}
            <div className="flex flex-row w-full gap-2">
              <button
                className={`py-2 px-4 rounded border w-1/2 text-sm font-semibold ${
                  selected === "SAAS"
                    ? "bg-[#1570EF] text-white border-[#1570EF]"
                    : "bg-gray-100 text-[#414651] border-gray-200"
                }`}
                onClick={() => setSelected("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`py-2 px-4 rounded border w-1/2 text-sm font-semibold ${
                  selected === "Self Hosted"
                    ? "bg-[#1570EF] text-white border-[#1570EF]"
                    : "bg-gray-100 text-[#414651] border-gray-200"
                }`}
                onClick={() => setSelected("Self Hosted")}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <hr className="border-gray-300 my-6 w-full" />

          {/* Additional Buttons */}
          {selected === "SAAS" && (
            <div className="flex flex-col w-full gap-4">
              <button className="py-2 px-4 rounded border flex justify-center items-center gap-4 border-gray-200">
                <img src="/github.svg" alt="github" />
                <div className="text-xs">Sign in with Github</div>
              </button>
              <button className="py-2 px-4 rounded border flex justify-center items-center gap-4 border-gray-200">
                <img src="/bitbucket.svg" alt="bitbucket" />
                <div className="text-xs">Sign in with Bitbucket</div>
              </button>
              <button className="py-2 px-4 rounded border justify-center  flex items-center gap-4 border-gray-200">
                <img src="/azure.svg" alt="azure" />
                <div className="text-xs">Sign in with Azure DevOps</div>
              </button>
              <button className="py-2 px-4 rounded border flex justify-center items-center gap-4 border-gray-200">
                <img src="/lab.svg" alt="gitlab" />
                <div className="text-xs">Sign in with Gitlab</div>
              </button>
            </div>
          )}

          {selected === "Self Hosted" && (
            <div className="flex flex-col w-full gap-4">
              <button className="py-2 px-4 rounded border flex justify-center items-center gap-4 border-gray-200">
                <img src="/lab.svg" alt="gitlab" />
                <div className="text-xs">Self Hosted Gitlab</div>
              </button>
              <button className="py-2 px-4 rounded border flex justify-center items-center gap-4 border-gray-200">
                <img src="/key.svg" alt="key" />
                <div className="text-xs">Sign in with SSO</div>
              </button>
            </div>
          )}
        </div>
        <div className="mt-6 text-center text-xs">
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
};

export default Signin;
