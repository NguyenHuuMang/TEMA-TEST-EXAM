import clsx from "clsx";
import "./style.scss";
import mapImg from "../../../../assets/images/map.png";
import princesImg from "../../../../assets/images/princes.png";

type Props = {
  className?: string;
};

const Art = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "d-flex align-items-center justify-content-center w-50 flex-column"
      )}
    >
      <img
        src={princesImg}
        alt=""
        className="img-responsive animated-img"
        style={{ marginTop: "20px" }}
      />

      <img
        src={mapImg}
        alt=""
        className="img-responsive position-relative"
        style={{ marginTop: "-60px" }}
      />
    </div>
  );
};

export default Art;
