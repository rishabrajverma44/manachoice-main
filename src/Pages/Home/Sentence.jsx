import React from "react";
import TextSpan from "./TextSpan";

const Sentence = () => {
  const sentence = "rishab is a boy".split("");
  return (
    <div>
      {sentence.map((letter, index) => (
        <TextSpan key={index}>{letter}</TextSpan>
      ))}
    </div>
  );
};

export default Sentence;
