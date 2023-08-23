export const NoRestaurant = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <h1 className="text-2xl font-bold text-slate-400">
        ⛔ Searched Restaurant Not Found..
      </h1>
    </div>
  );
};

const ResturantsTabs = () => {
  return (
    <>
      <div className="flex justify-between items-center my-6 mx-4 w-[300px] lg:w-[420px] border border-[#ccc] rounded-lg p-4 animate-pulse">
        <div className="">
          <div className="m-2 bg-[#e0dede] w-[170px] lg:w-[250px] h-[15px]"></div>
          <div className="m-2 bg-[#e0dede] w-[130px] lg:w-[150px] h-[12px]"></div>
          <div className="m-2 bg-[#e0dede] w-[100px] h-[10px]"></div>
        </div>
        <div className="w-[80px] h-[50px] lg:w-[100px] lg:h-[70px] bg-[#e0dede]"></div>
      </div>
    </>
  );
};

export const ResturantShimmer = () => {
  return (
    <>
      <div className="bg-white px-6 py-4 my-8 mx-4 rounded-md shadow-lg">
        <div className="flex flex-col-reverse md:flex-row  justify-between items-center py-8 px-4 animate-pulse">
          <div className="ml-4 mt-8 md:mt-0">
            <div className="bg-[#e0dede] m-3 w-[300px] sm:w-[350px] h-[35px]"></div>
            <div className="bg-[#e0dede] m-3 w-[250px] h-[26px]"></div>
            <div className="bg-[#e0dede] m-3 w-[120px] h-[20px]"></div>
            <div className="bg-[#e0dede] m-3 w-[100px] h-[18px]"></div>
          </div>
          <div className="ml-4 md:ml-0">
            <div className="mr-5 w-[300px] lg:w-[350px] h-[200px] bg-[#e0dede]"></div>
          </div>
        </div>
        <div className="flex justify-evenly items-center flex-wrap mt-4">
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
          <ResturantsTabs />
        </div>
      </div>
    </>
  );
};

//

const ShimmerCard = () => {
  return (
    <>
      <div className="w-full sm:flex-col m-3 p-3 sm:m-4 sm:w-[300px] sm:p-4 border border-[#ccc] animate-pulse">
        <div className="w-full h-[100px] sm:h-[120px] mb-4 bg-[#e0dede]"></div>
        <div className="w-full h-[30px] sm:h-[40px] bg-[#e0dede]"></div>
        <div className="mt-3 w-[80%] h-[18px] sm:h-[25px] bg-[#e0dede]"></div>
        <div className="w-full h-[40px] py-4 flex justify-between items-center border-b border-[#ccc] mt-3">
          <div className="w-[20%] h-4 sm:h-6 bg-[#e0dede]"></div>
          <div className="w-[20%] h-4 sm:h-6 bg-[#e0dede]"></div>
          <div className="w-[20%] h-4 sm:h-6 bg-[#e0dede]"></div>
        </div>
        <div className="mt-3 w-full h-6 bg-[#e0dede]"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div
        className="flex justify-center items-center mx-4 sm:mx-8 w-full flex-wrap"
        data-testid="shimmer-ui"
      >
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </>
  );
};

export default Shimmer;
