import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div>
        Created by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.carlageglio.com/"
        >
          Carla Geglio
        </a>
        .
      </div>
      <div>Just for fun.</div>
    </div>
  );
}
