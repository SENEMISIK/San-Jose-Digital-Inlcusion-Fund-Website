import React from "react";
import "./JourneyMapStyle.css";

function JourneyMap() {
  return (
    <div className="page">
      <h1 className="whiteheader" style={{ fontSize: "3rem" }}>
        YOUR JOURNEY
      </h1>
      <h3 className="whiteheader" style={{ fontSize: "2rem" }}>
        WHERE ARE YOU ON THE PATH OF DIGITAL INCLUSION?
      </h3>
      <div>
        <div className="digit1">1</div>
        <div className="circle1">
          <span className="text1">EXPLORE OUR PROGRAMS</span>
        </div>
        <div className="connect1"></div>
      </div>

      <div>
        <div className="digit2">2</div>
        <div className="circle2">
          <span className="text2">SEE WHAT YOU ARE ELIGIBLE FOR</span>
        </div>
        <div className="connect2"></div>
      </div>

      <div>
        <div className="digit3">3</div>
        <div className="circle3">
          <span className="text3">CONNECT WITH ORGANIZATIONS</span>
        </div>
        <div className="connect3"></div>
      </div>

      <div>
        <div className="digit4">4</div>
        <div className="circle4">
          <span className="text4">STAY IN THE LOOP</span>
        </div>
      </div>
    </div>
  );
}
export default JourneyMap;