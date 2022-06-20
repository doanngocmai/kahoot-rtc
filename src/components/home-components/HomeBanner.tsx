import React from "react";
import "../../styles/home-banner.css";

export const HomeBanner = () => {
  return (
    <div className={"home-banner"}>
      <div className={"home-banner__bg"}/>
      <h1 className={"home-banner__title"}>
        Kahoot RTC
      </h1>
      <div className={"home-banner__description"}>
        Yet another Kahoot game made for no reason that runs on WebRTC.
      </div>
    </div>
  )
}
