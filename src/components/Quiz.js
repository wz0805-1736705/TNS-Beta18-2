import React from "react";
import * as typeformEmbed from "@typeform/embed";

class Quiz extends React.Component {
  // typeformEmbed.makePopup(Typeform url, {parameters})
  componentDidMount() {
    const popup1 = typeformEmbed.makePopup(
      "https://nhscore.typeform.com/to/a5pkC39o",
      {
        mode: "popup",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onsubmit: function () {
          console.log("Typeform successfully submitted");
        },
      }
    );
    document.getElementById("bt-popup").addEventListener("click", function () {
      popup1.open();
    });
  }
  render() {
    return (
      <div>
        <button id="bt-popup">Launch me</button>
      </div>
    );
  }
}

export default Quiz;
