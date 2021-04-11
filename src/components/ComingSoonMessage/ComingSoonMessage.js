import React from "react";
import { isMobile } from "react-device-detect";
import crystal from "../../images/crystal.png";
import "./comingSoonMessage.scss";

export default function ComingSoonMessage() {
  return (
    <div className="coming-soon-message-container">
      <header>Tragic Magic</header>
      <img alt="Crystal Ball" src={crystal} height={isMobile ? 200 : 300} />
      <div className="coming-soon">Coming Soon!</div>
    </div>
  );
}
