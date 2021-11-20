// to use JSX, import:
import React from "react";
import SearchCard from "./SearchCard";
import InfoCard from "./InfoCard";

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
      <div className="find-belong mt-4" style={{marginLeft: '5vw', marginRight: '5vw'}}>
        <h2>Find Where You Belong</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus
          volutpat, justo mauris. Sit ornare eros dolor eleifend odio mattis.
          Pharetra eu sagittis ornare quisque facilisis varius eu eget urna.
          Nisi, est nunc mauris elit sed ornare.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
      <h2 className="city-insight">City Insights</h2>
        <div>
          <InfoCard />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
