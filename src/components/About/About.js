import React, { useEffect } from "react";
import "./about.scss";

export default function About() {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    const feedContainer = document.getElementById("pixlee_container");
    scriptTag.src =
      "//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js";

    window.PixleeAsyncInit = () => {
      Pixlee.init({ apiKey: "NJWdePYiYgv19uHgeCg1" });
      Pixlee.addSimpleWidget({ widgetId: "34712" });
    };

    feedContainer.style.display = "block";
    document.body.appendChild(scriptTag);

    return () => {
      feedContainer.style.display = "none";
      document.body.removeChild(scriptTag);
    };
  }, []);

  return <div className="about">Created by Carla Geglio</div>;
}
