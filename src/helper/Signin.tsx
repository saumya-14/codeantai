

const Signin = () => {
  return (
    <div className="h-screen w-full flex">
    {/* Left */}
    <div className="w-1/2 flex flex-col items-center justify-center">
  {/* mainbox */}
  <div className="h-[322px] w-[474px] relative">
    {/* 1stbox */}
    <div className="bg-white shadow-xl flex flex-col rounded-xl h-[170px] w-[447px] absolute top-0 left-0">
      {/* 1stline */}
      <div className="flex flex-row gap-2 ml-4 items-start justify-start">
        <img src="/logo2.svg" alt="logo" />
        <div className="text-[#081735] text-[18px] font-bold">
          AI to Detect & Autofix Bad Code
        </div>
      </div>
      <hr className="border-gray-300 my-4 mx-auto w-full" />
      {/* 2ndline */}
      <div className="flex justify-around items-center space-x-8">
        <div className="flex flex-col items-center">
          <div className="text-[#081735] text-xl font-bold">30K+</div>
          <div className="text-lg font-normal text-center">Language Support</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#081735] text-xl font-bold">10K+</div>
          <div className="text-lg font-normal text-center">Developers</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#081735] text-xl font-bold">100K+</div>
          <div className="text-lg font-normal text-center">Hours Saved</div>
        </div>
      </div>
    </div>
    {/* 2ndbox */}
    <div className="h-[164px] w-[270px] bg-white shadow-lg rounded-xl absolute bottom-0 right-0">
      <div className="flex justify-between items-start w-full h-1/2 p-4">
        <img src="/file.svg" alt="fileimage" className="w-16 h-16" />
        <div className="flex flex-col items-end">
          <div className="text-[#0049C6] text-lg font-bold">↑ 14%</div>
          <div className="text-lg">This week</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start p-2 ml-4 h-1/2">
        <div className="text-xl font-bold">Issues Fixed</div>
        <div className="text-[#081735] font-bold text-3xl">500K+</div>
      </div>
    </div>
  </div>
</div>

{/* Logo at bottom left */}
<div className="absolute bottom-4 left-4">
  <img src="/logo.svg" alt="logo" className="h-52" />
</div>
    {/* Right */}
    <div className="w-1/2 bg-[#FAFAFA] flex items-center justify-center">
         
    </div>
</div>
  )
}

export default Signin