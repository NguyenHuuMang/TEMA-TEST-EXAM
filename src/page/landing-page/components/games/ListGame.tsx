import clsx from "clsx";
import mapImg from "../../../../assets/images/map.png";
import "./style.scss";
import eSpace from "../../../../assets/images/e-space.png";
import kingLand from "../../../../assets/images/king-land.png";
import lastGame from "../../../../assets/images/last-game.png";
import dragonGame from "../../../../assets/images/dragon.png";
import piratesGame from "../../../../assets/images/pirates.png";
import witchPartyGame from "../../../../assets/images/witchparty.png";
import rockyGame from "../../../../assets/images/rocky.png";
import blueFireGame from "../../../../assets/images/blue-fire.png";
import magicTree from "../../../../assets/images/magic-tree.png";
import aboriginesGame from "../../../../assets/images/aborigines.png";
import cinderellaGame from "../../../../assets/images/cinderella.png";
import egyptGame from "../../../../assets/images/egypt.png";
type Props = {
  className?: string;
};

const ListGame = ({ className }: Props) => {
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
      textColor: "#000000",
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
        "d-flex align-items-center justify-content-center w-50 flex-column"
      )}
    >
      <div className="d-flex flex-column" style={{ gap: "24px" }}>
        <span
          style={{
            color: "#000",
            fontSize: "60px",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Our Game
        </span>
        <span
          style={{
            color: "#757575",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "140%",
            textAlign: "center",
          }}
        >
          As a pioneer of mobile app gamification, we take pride in originality
          and individuality, providing global players with state-of-the-art
          games that feature splendid storylines, sensational sound effects and
          magnificent animation that never cease to impress.
        </span>
      </div>
      <div className="container-fluid game-grid-container">
        <div className="row staggered-grid">
          {games.map((game) => {
            const path = game?.imageUrl;
            console.log(path);
            return (
              <div
                key={game.id}
                className={`col-6 col-md-4 col-lg-3 game-card-wrapper ${
                  game.id % 2 === 0 ? "offset-card" : "height-full"
                }`}
              >
                <div
                  className="game-card"
                  style={{
                    backgroundColor: game.backgroundColor,
                    color: game.textColor,
                  }}
                >
                  <div className="game-card-content">
                    <h3 className="game-title">{game.title}</h3>
                    <p className="game-description">{game.description}</p>
                  </div>
                  <div
                    className="game-img-overlay"
                    style={{
                      backgroundImage: `url(${game.imageUrl})`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListGame;
