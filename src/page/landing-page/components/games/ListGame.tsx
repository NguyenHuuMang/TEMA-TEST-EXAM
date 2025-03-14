import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import aboriginesGame from "../../../../assets/images/aborigines.png";
import blueFireGame from "../../../../assets/images/blue-fire.png";
import cinderellaGame from "../../../../assets/images/cinderella.png";
import dragonGame from "../../../../assets/images/dragon.png";
import eSpace from "../../../../assets/images/e-space.png";
import egyptGame from "../../../../assets/images/egypt.png";
import kingLand from "../../../../assets/images/king-land.png";
import lastGame from "../../../../assets/images/last-game.png";
import magicTree from "../../../../assets/images/magic-tree.png";
import piratesGame from "../../../../assets/images/pirates.png";
import rockyGame from "../../../../assets/images/rocky.png";
import witchPartyGame from "../../../../assets/images/witchparty.png";
import "./style.scss";
type Props = {
  className?: string;
};

const ListGame = ({ className }: Props) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth > 819);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 819);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const games = [
    {
      id: 1,
      title: "E-Space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: eSpace,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 2,
      title: "Kingland",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: kingLand,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 3,
      title: "The Last Game",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: lastGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 4,
      title: "G-Dragon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: dragonGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 5,
      title: "Pirates",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: piratesGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 6,
      title: "Witch Party",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: witchPartyGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 7,
      title: "Rocky",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: rockyGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 8,
      title: "Blue Fire",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: blueFireGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 9,
      title: "Magic tree",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: magicTree,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 10,
      title: "Aborigines",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: aboriginesGame,
      backgroundColor: "#193250",
      textColor: "#ffff",
    },
    {
      id: 11,
      title: "Cinderella",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: cinderellaGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
    {
      id: 12,
      title: "Egypt Game",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis orci, maximus a tempus at, sodales at magna.",
      imageUrl: egyptGame,
      backgroundColor: "#193250",
      textColor: "#ffffff",
    },
  ];

  return (
    <div
      className={clsx(
        className,
        "d-flex align-items-center justify-content-center list-game-calc-width flex-column"
      )}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ gap: "24px" }}
      >
        <div className="title-list-game-page">
          {(t as any)("gameInfo.ourGames")}
        </div>
        <span className="game-description">
          {(t as any)("gameInfo.description")}
        </span>
      </div>
      {isMobile ? (
        <div className="d-flex flex-row px-10 w-100">
          <div className="game-list-desktop">
            {games.map((game) => {
              return (
                <div
                  key={game.id}
                  className={`game-card-mobile ${
                    game.id % 2 === 0 ? "even-card" : ""
                  }`}
                  style={{
                    backgroundColor:
                      "linear-gradient(360deg, rgba(0, 9, 225, 0.5) 6.79%, rgba(0, 0, 0, 0) 61.34%)",
                    color: game.textColor,
                  }}
                >
                  <div className="game-card-content-mobile">
                    <div className="game-title-mobile">{game.title}</div>
                    <div className="game-description-mobile">
                      {game.description}
                    </div>
                  </div>
                  <div
                    className="game-img-overlay-mobile"
                    style={{
                      backgroundImage: `url(${game.imageUrl})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="d-flex flex-row px-10 calc-width-card">
          <div className="game-list-mobile">
            {games.map((game) => {
              return (
                <div
                  key={game.id}
                  className={`game-card-mobile ${
                    game.id % 2 === 0 ? "even-card" : ""
                  }`}
                  style={{
                    backgroundColor:
                      "linear-gradient(360deg, rgba(0, 9, 225, 0.5) 6.79%, rgba(0, 0, 0, 0) 61.34%)",
                    color: game.textColor,
                  }}
                >
                  <div
                    className="game-card-content-mobile"
                    style={{ gap: "16px" }}
                  >
                    <div
                      className="game-title-mobile"
                      style={{ marginBottom: "0px" }}
                    >
                      {game.title}
                    </div>
                    <div
                      className="game-description-mobile"
                      style={{ marginBottom: "0px" }}
                    >
                      {game.description}
                    </div>
                  </div>
                  <div
                    className="game-img-overlay-mobile"
                    style={{
                      backgroundImage: `url(${game.imageUrl})`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListGame;
