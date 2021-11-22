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
      <div className="find-belong mt-4">
        <QuizButton />
        <h2
          style={{
            marginLeft: "5vw",
            marginRight: "5vw",
            fontSize: 24,
            fontFamily: "Avenir",
          }}
        >
          Find Where You Belong
        </h2>
        <p
          className="intro mb-10"
          style={{
            marginLeft: "5vw",
            marginRight: "5vw",
            fontSize: 18,
            fontFamily: "Avenir",
          }}
        >
          {" "}
          The most powerful, personalized neighborhood discovery platform. Let
          us empower you to find the community you love for FREE.
        </p>
      </div>

      <div style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "8vw" }}>
        <h2
          className="city-insight mt-10"
          style={{
            fontSize: 24,
            fontFamily: "Avenir",
          }}
        >
          City Insights
        </h2>
        <div>
          <InfoCard />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
