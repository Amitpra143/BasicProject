import React, { useState } from "react";
import emoji from "../emoji/emoji.json";

const Emoji = () => {
  const [state, setState] = useState("");
//   const [result, setResult] = useState(false);
  console.log(state);

  const searchandle = (e) => {
    setState(e.target.value);
  };

  const emojifilter = emoji.filter((ele) => {
    // return ele.aliases.includes(state)
    if (ele.aliases == state) {
      return true
    } else {
      return false
    }
  });

  console.log(emojifilter);

  return (
    <>
      <div>Emoji</div>

      <input
        type="text"
        placeholder="Search Your Expression"
        onChange={searchandle}
      />

      {  emojifilter !== state && emojifilter.length===0 && <div>No Emoji Found</div>}
      
      {
      emojifilter.map((ele) => {
        return (
          <div className="searchitem" style={{ border: "1px solid black ", margin: "10px" }} >
            {ele.emoji}
          </div>
        );
      })}

      {emoji.map((item) => {
        return (
          <>
            <div className="emoji-sh">
              <p>
                {item.emoji}
                {item.aliases}
              </p>
            </div>
          </>
        );
      })} 
    </>
  );
};

export default Emoji;
