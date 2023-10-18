import React from "react";

const SectionHeader = ({ header, subHeader, desc }) => {
  return (
    <div className="my-4 mx-auto flex flex-col  justify-center items-center gap-4">
      {header && <h1 className="text-4xl font-bold">{header}</h1>}
      {desc && <p className="w-[35%] text-center text-[#706F7B]">{desc}</p>}
    </div>
  );
};

export default SectionHeader;
