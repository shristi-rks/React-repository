import { useState } from "react";
import { Heading } from "./Heading";

export const Button = ({anecdotes}) => {
    const [selected, setSelected] = useState(0);
    const handleClick = () => {
      const index = Math.floor(Math.random() * ((anecdotes.length-1) + 1));
      console.log(index);
      setSelected(index);
    };  
    const arr = Array(anecdotes.length).fill(0);
    const [vote, setVote] = useState(arr);
    const copy = [...vote];
    const handleVote = () => { 
        copy[selected] += 1;
        setVote(copy); 
        console.log(vote);  
        console.log(copy)  ; 
        console.log(selected);   
        
    };  
    const max = Math.max(...copy);
    for (let i = 0; i < copy.length; i++ ) {
        if (copy[i] === max) {
            return (
                <>
                {anecdotes[selected]}
                <p>has {vote[selected]} votes</p>
                <button onClick={handleVote} >vote</button>  
                <button onClick={handleClick}>next ancedote</button>
                <Heading content = "Anecdote with most votes" />
                {anecdotes[i]}
                </>
            );
        }
    }

};

