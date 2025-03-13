import React from "react";
import clsx from "clsx";
import "./style.scss";
import calendarImg from "../../../../assets/images/CalendarImg.png";
import teamImg from "../../../../assets/images/teamImg.png";
import designImg from "../../../../assets/images/designImg.png";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};

const ContactUs = ({ className }: Props) => {
  const { t } = useTranslation();

  const fakeData = {
    user: 600,
    game: 135,
  };
  return (
    <div
      className={clsx(
        className,
        "about-us d-flex align-items-center justify-content-center calc-width"
      )}
    >
      <div className="d-flex w-100 responsive-about-us" style={{ gap: "40px" }}>
        <div className="d-flex flex-column grid-responsive-about-us">
          <div className="left-about-us">
            <div className="title-about-us">{(t as any)("aboutUs.title")}</div>
            <div className="description-about-us">
              {(t as any)("aboutUs.description")}
            </div>
          </div>
          <div
            className="d-flex flex-column info-user-game-responsive"
            style={{ gap: "40px", marginTop: "70px" }}
          >
            <div className="d-flex flex-column gap-1">
              <span className="user-system">
                {fakeData.user}
                <span className="unit">M</span>+
              </span>
              <span className="user-title">{(t as any)("aboutUs.user")}</span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="user-system">{fakeData.game}+</span>
              <span className="user-title">{(t as any)("aboutUs.game")}</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column grid-responsive-about-us">
          <div className="right-about-us">
            <div className="space-right-about-us-item">
              <div className="gap-about-us-item">
                <img
                  src={calendarImg}
                  alt=""
                  className="object-fit-cover"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="d-flex flex-column gap-2">
                  <span className="title-item-right">
                    {(t as any)("aboutUs.everyhour")}
                  </span>
                  <span className="description-item-right">
                    {(t as any)("aboutUs.subEveryhour")}
                  </span>
                </div>
              </div>
              <div className="gap-about-us-item">
                <img
                  src={designImg}
                  alt=""
                  className="object-fit-cover"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="d-flex flex-column gap-2">
                  <span className="title-item-right">
                    {(t as any)("aboutUs.design")}
                  </span>
                  <span className="description-item-right">
                    {(t as any)("aboutUs.subDesign")}
                  </span>
                </div>
              </div>
              <div className="gap-about-us-item">
                <img
                  src={teamImg}
                  alt=""
                  className="object-fit-cover"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="d-flex flex-column gap-2">
                  <span className="title-item-right">
                    {(t as any)("aboutUs.team")}
                  </span>
                  <span className="description-item-right">
                    {(t as any)("aboutUs.subTeam")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
