import React from "react";

const SectionHeader = ({ header, subHeader, desc }) => {
  return (
    <div className="mt-20 md:mt-28 mb-5 md:mb-10 mx-auto flex flex-col  justify-center items-center gap-4 text-center">
      {subHeader && (
        <h3 className="font-semibold text-lg md:text-xl">{subHeader}</h3>
      )}
      {header && <h1 className="text-3xl md:text-5xl font-bold">{header}</h1>}
      {desc && (
        <p
          className={`w-[90%] md:w-[70%] ${
            desc.length > 20 ? "lg:w-[50%]" : "lg:w-[35%]"
          } text-center text-[#706F7B] text-sm md:text-base`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
