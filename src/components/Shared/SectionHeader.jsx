import React from "react";

const SectionHeader = ({ header, subHeader, desc }) => {
  return (
    <div className="my-4 mx-auto flex flex-col  justify-center items-center gap-4 text-center">
      {header && <h1 className="text-2xl md:text-4xl font-bold">{header}</h1>}
      {desc && (
        <p className="w-[90%] md:w-[70%] lg:w-[35%] text-center text-[#706F7B] text-sm md:text-base">
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
