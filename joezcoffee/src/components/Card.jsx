export const Card = ({ title, header, desc, img, idx = 0 }) => {
  const reverse = idx;

  return (
    <>
      {!reverse ? (
        <div className="max-w-full h-[80vh] flex justify-center items-center mx-auto bg-slate-100 overflow-hidden md: min-w-2xl md:max-w-full">
          <div className="md:flex justify-center">
            <div className="p-8 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-md text-coffee italic tracking-widest">
                {title}
              </div>
              <p className="block leading-right font-medium text-7xl text-black font-serif">
                {header}
              </p>
              <p className="mt-2 text-slate-500">{desc}</p>
            </div>
            <div className="md:shrink-0">
              <img
                className="h-51 w-full object-cover md:h-full md:max-w-full"
                src={img}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-full h-[90vh] flex justify-center items-center mx-auto bg-gray-800 overflow-hidden md: min-w-2xl md:max-w-full">
          <div className="md:flex flex-row-reverse justify-center">
            <div className="p-8 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-md text-coffee italic tracking-widest">
                {title}
              </div>
              <p className="block leading-right font-medium text-7xl  text-white font-serif">
                {header}
              </p>
              <p className="mt-2 text-slate-500">{desc}</p>
            </div>
            <div className="w-full md:w-1/2 md:shrink-0">
              <img
                className="h-full w-full object-cover md:h-full md:max-w-full"
                src={img}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
