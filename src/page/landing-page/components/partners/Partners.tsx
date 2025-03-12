import clsx from "clsx";
import React from "react";
type Props = {
  className?: string;
};
const Partners = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "d-flex align-items-center justify-content-center w-50 flex-column"
      )}
    >
      <div style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="d-flex flex-column" style={{ gap: "80px" }}>
          <div>Our Partners</div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
