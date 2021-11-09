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
      {/* TODO: readjust the title position*/}
      {/* <div className="mt-5">
        <h1>The Neighborhood Score</h1>
        <h3>Good {timeOfDay}, Discover your perfect neighborhood</h3>
        <p>
          The most powerful, personalized neighborhood discovery platform.
          <br />
          Let us empower you to find the community you love for FREE.
        </p>
      </div> */}
      {/* Search Card */}
      <div className="s-box">
        <SearchCard />
      </div>

      {/* Info Card */}
      {/* TODO: adjust the left padding */}
      <div className="find-belong mt-4">
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
      <h2 className="city-insight">City Insight</h2>
      <div>
        <InfoCard />
      </div>
    </main>
  );
}

export default MainContent;
