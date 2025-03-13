import React, { ChangeEvent, useState } from "react";
import "./style.scss";
import Select from "react-select";
type Props = {
  showLabel?: boolean;
};
const FlagSelect = ({ showLabel = false }: Props) => {
  const [selected, setSelected] = useState("us");

  const options = [
    {
      value: "us",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
            alt="US"
            style={{ width: "24px", height: "16px" }}
          />
          {showLabel && "United States"}
        </div>
      ),
    },
    {
      value: "vn",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
            alt="VN"
            style={{ width: "24px", height: "16px" }}
          />
          {showLabel && "Vietnam"}
        </div>
      ),
    },
  ];

  return (
    <>
      {showLabel ? (
        <Select options={options} defaultValue={options[0]} className="w-25" />
      ) : (
        <Select options={options} defaultValue={options[0]} className="w-25" />
      )}
    </>
  );
};

export default FlagSelect;
