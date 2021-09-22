import React from "react";
import stillLooking from "../../images/stillLooking.png";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <img
        className="heartbeat"
        src={stillLooking}
        alt="An eye with the words 'Still Looking'"
      />
    </div>
  );
}
