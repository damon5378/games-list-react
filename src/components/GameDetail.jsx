import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import { smallImage } from "../util";

export const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/games-list-react");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const { game, screen, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                    // <img src={playstation}>{data.platform.name}</img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt=""
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results.map((s) => (
                <img key={s.id} src={smallImage(s.image, 1280)} alt="" />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline-block;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

const Gallery = styled(motion.div)`
  img {
    margin-bottom: 25px;
  }
`;
