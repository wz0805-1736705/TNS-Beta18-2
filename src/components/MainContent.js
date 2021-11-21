// to use JSX, import:
import React from "react";
import SearchCard from "./SearchCard";
import InfoCard from "./InfoCard";
import QuizButton from "./QuizButton";

function MainContent() {
  // const styles = {
  //   color: "#4e5053",
  //   backgroundColor: "#ffffff"
  // };

  return (
    <main>
      {/* Search Card */}
      <div className="s-box">
        <SearchCard />
      </div>

      {/* Info Card */}
      {/* TODO: adjust the left padding */}
      <div
        className="find-belong mt-4"
        style={{ marginLeft: "5vw", marginRight: "5vw" }}
      >
        <QuizButton />
        <h2>Find Where You Belong</h2>
        <p className="intro mb-10">
          {" "}
          The most powerful, personalized neighborhood discovery platform. Let
          us empower you to find the community you love for FREE.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: "5vw", marginRight: "5vw" }}>
        <h2 className="city-insight mt-10">City Insights</h2>
        <div>
          <InfoCard />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
