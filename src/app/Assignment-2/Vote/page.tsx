"use client";
import { useReducer } from "react";
import { votes as partyVotes, voteReducer } from "../VoteReducer";
import style from "@/app/Assignment-2/Styles/Vote.module.css";

const VotingPage = () => {
  const parties = ["BJP", "Congress", "BSP", "SP", "AAP"];

  const [votes, dispatch] = useReducer(voteReducer, partyVotes);

  return (
    <div className={style["votesApp"]}>
      <div className={style["votes"]}>
        {parties.map((party, idx) => (
          <div key={idx}>
            <h1>{party}</h1>
            <p>Votes : {votes[party]}</p>
          </div>
        ))}
      </div>
      <div className={style["votingButtons"]}>
        {parties.map((party, idx) => (
          <button
            className={style[`${party.toLowerCase()}Button`]}
            key={idx}
            onClick={() => dispatch({ type: party })}
          >
            {party}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VotingPage;
