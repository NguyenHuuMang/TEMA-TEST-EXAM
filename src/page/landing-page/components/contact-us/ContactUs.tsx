import React from "react";
import clsx from "clsx";
import "./style.scss";
import calendarImg from "../../../../assets/images/CalendarImg.png";
import teamImg from "../../../../assets/images/teamImg.png";
import designImg from "../../../../assets/images/designImg.png";

type Props = {
  className?: string;
};

const ContactUs = ({ className }: Props) => {
  const fakeData = {
    description: `Browse our selection of free online games and have a great time
              without leaving the site! Our Kids Games option also includes game
              reviews, extensive game cheats and walkthroughs, and much more. We
              have exclusive free downloads, videos, and articles as well. Etech
              reviews the most popular kids games from all the most popular
              video gaming platforms, so you don’t need to search around for fun
              anywhere else on the Internet. Explore a whole new world of gaming
              on Etech.`,
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
            <div className="title-about-us">About Us</div>
            <div className="description-about-us">{fakeData.description}</div>
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
              <span className="user-title">Users</span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="user-system">{fakeData.game}+</span>
              <span className="user-title">Games</span>
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
                  <span className="title-item-right">24 - Hour</span>
                  <span className="description-item-right">
                    24/7 access ensures operators' businesses runs smoothly all
                    year long.
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
                  <span className="title-item-right">Design</span>
                  <span className="description-item-right">
                    Combining imaginative universes, play dynamics, and
                    unprecedented gameplay, our games transcend the boundaries
                    of the virtual world by weaving innovative gameplay.
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
                  <span className="title-item-right">Team</span>
                  <span className="description-item-right">
                    Etech is an award-winning, international studio of
                    designers, artists, animators and producers that create
                    content for the biggest names in film and video games.
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
