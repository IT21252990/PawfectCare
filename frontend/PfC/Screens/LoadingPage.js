import { react , FunctionComponent, useCallback } from "react";

const LoadingPage = () => {
  const onRectangleImageClick = useCallback(() => {
    // Please sync "Login Page" to the project
  }, []);

  return (
    <div className="relative bg-plum w-full h-[800px] overflow-hidden text-left text-[24px] text-black font-jockey-one">
      <img
        className="absolute top-[242px] left-[70px] w-[220px] h-[178px] object-cover cursor-pointer"
        alt=""
        src="/rectangle-31@2x.png"
        onClick={onRectangleImageClick}
      />
      <img
        className="absolute top-[610px] left-[129px] w-[102px] h-[100px] object-cover"
        alt=""
        src="/rectangle-32@2x.png"
      />
      <div className="absolute top-[726px] left-[134px]">Loading ...</div>
      <div className="absolute top-[434px] left-[81px] text-[40px] font-oleo-script text-darkslategray">
        Pawfect Care
      </div>
      <img
        className="absolute top-[426.56px] left-[213.04px] w-[35.84px] h-[34.44px] object-cover"
        alt=""
        src="/rectangle-33@2x.png"
      />
    </div>
  );
};

export default LoadingPage;
