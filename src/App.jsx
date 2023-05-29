import React, { useState } from "react";
import "./App.css";
import scissors from "./assets/images/icon-scissors.svg";
import spock from "./assets/images/icon-spock.svg";
import paper from "./assets/images/icon-paper.svg";
import lizard from "./assets/images/icon-lizard.svg";
import rock from "./assets/images/icon-rock.svg";
import Modal from "./components/Modal";
import Results from "./components/Results";

function App() {
  const [modal, setModal] = useState(false);
  const [userOption, setUserOption] = useState(null);
  const [houseOption, setHouseOption] = useState("");
  const [score, setScore] = useState(0);
  const [isUserChoice, setIsUserChoice] = useState(false);
  

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const selectionUserOption = (option) => {
    setUserOption(option);
    setIsUserChoice(true);
    const options = ["scissors", "spock", "paper", "lizard", "rock"];
    const randomOption = options[Math.floor(Math.random() * 5)];
    setTimeout(() => {
      setHouseOption(randomOption);
    }, 3000);
  };

  return (
    <div className="App">
      {modal && <Modal closeModal={() => setModal(false)} />}
      <header>
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
          <p>LIZZARD</p>
          <p>SPOCK</p>
        </div>
        <div className="score-container">
          <p className="score">SCORE</p>
          <p className="number">{score}</p>
        </div>
      </header>
      <main>
      <div className={isUserChoice ? "Results" : "ResultsNone"}>
          <Results
            userOption={userOption}
            setUserOption={setUserOption}
            houseOption={houseOption}
            setHouseOption={setHouseOption}
            setScore={setScore}
            setIsUserChoice={setIsUserChoice}
          />
        </div>
        <div className={isUserChoice ? "containerNone" : "container"}>
          <div className="top">
            <div
              className="circle scissors"
              onClick={() => selectionUserOption("scissors")}
            >
              <img src={scissors} alt="" />
            </div>
          </div>
          <div className="midle">
            <div
              className="circle spock"
              onClick={() => selectionUserOption("spock")}
            >
              <img src={spock} alt="" />
            </div>
            <div
              className="circle paper"
              onClick={() => selectionUserOption("paper")}
            >
              <img src={paper} alt="" />
            </div>
          </div>
          <div className="bottom">
            <div
              className="circle lizard"
              onClick={() => selectionUserOption("lizard")}
            >
              <img src={lizard} alt="" />
            </div>
            <div
              className="circle rock"
              onClick={() => selectionUserOption("rock")}
            >
              <img src={rock} alt="" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button className="button" onClick={openModal}>
          RULES
        </button>
      </footer>
    </div>
  );
}

export default App;
