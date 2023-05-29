import React, { useEffect, useState } from "react";
import scissors from "../assets/images/icon-scissors.svg";
import lizard from "../assets/images/icon-lizard.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import spock from "../assets/images/icon-spock.svg";
import "./Results.css";

function Results(props) {
  const { userOption, houseOption, setScore } = props;
  const [results, setResults] = useState("");
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    determineWinner();
  }, [houseOption]);

  const determineWinner = () => {
    if (houseOption === "") {
      setResults("");
    } else {
      if (userOption === houseOption) {
        setResults("IT'S A TIE");
        setIsButton(true);
      } else if (
        (userOption === "scissors" && houseOption === "paper") ||
        (userOption === "scissors" && houseOption === "lizard") ||
        (userOption === "paper" && houseOption === "rock") ||
        (userOption === "paper" && houseOption === "spock") ||
        (userOption === "lizard" && houseOption === "spock") ||
        (userOption === "lizard" && houseOption === "paper") ||
        (userOption === "spock" && houseOption === "scissors") ||
        (userOption === "spock" && houseOption === "rock") ||
        (userOption === "rock" && houseOption === "scissors") ||
        (userOption === "rock" && houseOption === "lizard")
      ) {
        props.setScore((prevScore) => prevScore + 1);
        setResults("YOU WIN");
        setIsButton(true);
      } else {
        props.setScore((prevScore) => prevScore - 1);
        setResults("YOU LOSE");
        setIsButton(true);
      }
    }
  };

  const playAgain = () => {
    props.setUserOption(null);
    props.setHouseOption("");
    setResults("");
    setIsButton(false);
    props.setIsUserChoice((currentValue) => {
      console.log(currentValue);
      return !currentValue;
    });
  };
  return (
    <div >
  <div className="Results-Container">
      <div>
        <div className="circle-game">
        <img src={eval(userOption)} alt="" />
        </div>
        <div className="text-game">
        <h2>YOU PICKED:</h2>
        </div>
      </div>

      <div >
        <div className="houseContainer">
        <div className="circle-game">
        <img src={eval(houseOption)} alt="" />
        </div>
        </div>
        <div className="text-game">
        <h2>THE HOUSE PICKED:</h2>
        </div>
      </div>
      </div>
      <div>
        <div className="text">
        <h2>{results}</h2>
        </div>
        <div className={isButton ? "ButtonGame" : "ButtonGameNone"}>
          <button onClick={playAgain} className="buttonDesign">PLAY AGAIN</button>
        </div>
      </div>

    </div>
    

  );
}

export default Results;
