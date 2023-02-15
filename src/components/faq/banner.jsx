import React from "react";

const banner = ({ toggle, show, question, answer}) => {
  return (
    <div onClick={toggle}>
      <h1 className="heading">{question}</h1>
      <p className={(show ? "h-full" : "h-0") + " overflow-hidden paraf"}>{answer}</p>
    </div>
  );
};

export default banner;

