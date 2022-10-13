import { useState } from "react";
export const Button = ({anecdotes}) => {
    const [selected, setSelected] = useState(0);
    const handleClick = () => {
      const index = Math.floor(Math.random() * ((anecdotes.length-1) + 1));
      console.log(index);
      setSelected(index);
    };  
    const arr = Array(anecdotes.length).fill(0);
    const [vote, setVote] = useState(arr);
    const handleVote = () => { 
        const copy = [...vote];
        copy[selected] += 1;
        setVote(copy); 
        console.log(copy)  ; 
        console.log(selected);   
        console.log(vote);   
    };
    
    return (
        <>
        {anecdotes[selected]}
        <p>has {vote[selected]} votes.</p>
        <button onClick={handleVote} >vote</button>  
        <button onClick={handleClick}>next ancedote</button>
        </>
    ); 
};



