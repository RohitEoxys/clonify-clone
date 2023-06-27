import React from "react";

const EditableHexInput = ({ onChange, hex }) => {
  return (
    <div className="flex px-[5px] py-[2px] myBorder items-center w-fit pr-2 h-[40px] sm:pr-[50px]">
      <div className={`h-[21px] w-[25px]`} style={{ backgroundColor: hex }} />
      <div className="ml-[10px]">{hex}</div>
    </div>
  );
};

export default EditableHexInput;
