"use client";
import BasicModal from "@/Components/Modal";
import { useEffect, useState } from "react";

const TicTacToePage = () => {
  const [playerOption, setPlayerOption] = useState("X");
  const [oppositeOption, setOppositeOption] = useState("O");
  const [moveCount, setMoveCount] = useState(0);
  const [isCompFirstMover, setIsCompFirstMover] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);
  const [computerWon, setComputerWon] = useState(false);
  const [blocks, setBlocks] = useState(new Array(9).fill(""));
  const [isTie, setIsTie] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  const generateRandomMove = () => {
    let move = Math.floor(Math.random() * 9);
    while (blocks[move] !== "") {
      move = Math.floor(Math.random() * 9);
    }

    setBlocks((prev) =>
      prev.map((block, idx) => (idx === move ? oppositeOption : block))
    );
    setMoveCount((prev) => prev + 1);
  };

  const winCheck = () => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        blocks[a] !== "" &&
        blocks[a] === blocks[b] &&
        blocks[b] === blocks[c]
      ) {
        const winner = blocks[a];
        setPlayerWon(winner === playerOption);
        setComputerWon(winner === oppositeOption);
        return;
      }
    }

    if (moveCount >= 9) {
      setIsTie(true);
    }
  };

  const onUserActionHandler = (idx) => {
    if (blocks[idx] !== "" || playerWon || computerWon || isTie) return;

    setBlocks((prev) =>
      prev.map((block, i) => (i === idx ? playerOption : block))
    );
    setMoveCount((prev) => prev + 1);

    setTimeout(() => {

      if (!playerWon && !computerWon && moveCount < 8) {
        generateRandomMove();
      }
    }, 200);
  };

  const resetGame = () => {
    setBlocks(new Array(9).fill(""));
    setPlayerWon(false);
    setComputerWon(false);
    setIsTie(false);
    setMoveCount(0);
  };

  useEffect(() => {
    if (isCompFirstMover && moveCount === 0) {
      generateRandomMove();
    }
    winCheck();
  }, [blocks, isCompFirstMover]);

  return (
    <div>
      <BasicModal
        title="Select your player"
        optionSelectHandler={setPlayerOption}
        oppositeOptionSelectHandler={setOppositeOption}
        isCompFirstMoverHandler={setIsCompFirstMover}
      />

      <div className="grid grid-cols-3 gap-2 w-48 mx-auto my-4">
        {blocks.map((block, idx) => (
          <input
            key={idx}
            onClick={() => onUserActionHandler(idx)}
            value={block}
            className="w-16 h-16 flex items-center justify-center border text-2xl cursor-pointer"
            readOnly
          />
            
        ))}
      </div>

      <div className="text-center">
        {playerWon && <p className="text-green-600">🎉 Player Won!</p>}
        {computerWon && <p className="text-red-600">💻 Computer Won!</p>}
        {isTie && !playerWon && !computerWon && (
          <p className="text-gray-600">🤝 It's a Tie!</p>
        )}

        {(playerWon || computerWon || isTie) && (
          <button
            onClick={resetGame}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Reset Game
          </button>
        )}
      </div>
    </div>
  );
};

export default TicTacToePage;
